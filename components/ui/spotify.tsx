import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link as HeroUILink } from "@heroui/link";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import Link from "next/link";
import { AiOutlineSpotify } from "react-icons/ai";
import { TbHeadphonesOff } from "react-icons/tb";

const client = new MongoClient(process.env.MONGODB_URI!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const dbName = "spotify-credentials";
const collectionName = "tokens";

type Artist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export default async function Spotify() {
  const { ok } = await getCurrentPlaying();

  return (
    <Card className="m-4">
      <CardHeader className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full  bg-success-500"></span>
          </span>
          <span>Currently listening to</span>
        </div>
      </CardHeader>
      <CardBody>
        {ok && (
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Avatar
                style={{ animation: "spin 5s linear infinite" }}
                isBordered
                size="lg"
                src={ok.artURL}
              />
              <div>
                <h3 className="font-semibold text-lg max-w-36 truncate md:max-w-full">
                  {ok.trackName}
                </h3>

                {/* <p className="text-sm"></p> */}
                <p className="text-sm max-w-36 truncate md:max-w-full">
                  {ok.artists.join(", ")}
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              <Link target="_blank" href={ok.trackURL}>
                <Button variant="bordered" startContent={<AiOutlineSpotify />}>
                  Play
                </Button>
              </Link>
            </div>
          </div>
        )}
        {ok == null && (
          <div className="flex items-center gap-4">
            <TbHeadphonesOff className="text-2xl" />
            <div>
              <p>I'm not listening to music right now.</p>
              <p>
                Check back later or check out my{" "}
                <HeroUILink
                  color="success"
                  isExternal
                  showAnchorIcon
                  href="https://open.spotify.com/user/31pfrvltqlljirx7nzurjtrefe6u?si=8d35b8fa983e4441"
                >
                  spotify profile
                </HeroUILink>
                .
              </p>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}

async function getCurrentPlaying() {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const documentId = process.env.DOCUMENT_ID;
  let accessToken = null;

  try {
    await client.connect();
    const article = await collection.findOne({
      _id: new ObjectId(documentId),
    });
    accessToken = article?.access_token;
    const refreshToken = article?.refresh_token;
    const expiresIn = article?.expires_in;
    const timestamp = new Date(article?.timestamp);

    const currtime = new Date();

    console.log(
      `Saved timestamp: ${timestamp.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`
    );

    console.log(
      `Current timestamp: ${currtime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`
    );

    console.log(`Expires in: ${expiresIn} ms`);

    console.log(
      `Do I need to refresh my token? ${(currtime.getTime() - timestamp.getTime()) / 1000 >= expiresIn}`
    );

    if ((currtime.getTime() - timestamp.getTime()) / 1000 >= expiresIn) {
      console.log("Refreshing token");
      const url = "https://accounts.spotify.com/api/token"; // Use the actual Spotify URL

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(clientId + ":" + clientSecret).toString("base64")}`,
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
          client_id: clientId,
        }),
      };

      console.log("Sending Refresh Request");
      const body = await fetch(url, payload);
      console.log("Received Refresh Response");

      // Add error handling for the fetch request
      if (!body.ok) {
        const errorText = await body.text();
        console.error(
          `Error refreshing token: ${body.status} ${body.statusText}`,
          errorText
        );
        return {
          ok: null,
          error: "Refresh response did not contain an access_token.",
        };
      } else {
        const response = await body.json();
        accessToken = response.access_token; // Update the access token

        console.log(`Access Token after Refresh: ${accessToken}`);
        console.log("Saving the new access token and timestamp to DB");

        if (accessToken) {
          await collection.replaceOne(
            { _id: new ObjectId(documentId) },
            {
              access_token: accessToken,
              refresh_token: refreshToken,
              expires_in: response.expires_in,
              timestamp: new Date(),
            }
          );
          console.log("Successfully refreshed token!");
        } else {
          console.error("Refresh response did not contain an access_token.");
          return {
            ok: null,
            error: "Refresh response did not contain an access_token.",
          };
        }
      }
    }
  } catch (err) {
    return {
      ok: null,
      error: err,
    };
  } finally {
    await client.close();
    return getTrackInfo(accessToken);
  }
}

async function getTrackInfo(accessToken: string) {
  const url = "https://api.spotify.com/v1/me/player/currently-playing";
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const body = await response.json();
    const artists = body.item.artists.map((artist: Artist) => artist.name);
    const trackURL = body.item.external_urls.spotify;
    const trackName = body.item.name;
    const artURL = body.item.album.images[0].url;

    return {
      ok: {
        artists,
        trackURL,
        trackName,
        artURL,
      },
      error: null,
    };
  } catch (error) {
    return {
      ok: null,
      error,
    };
  }
}
