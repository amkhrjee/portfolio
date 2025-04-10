"use client";
import { CodeBlock } from "@/components/ui/code-block";
import { fontSerif } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import { Link } from "@heroui/link";
import Image from "next/image";
import { FaShare } from "react-icons/fa6";

export default function Page() {
  const code = `{
  access_token: String,
  refresh_token: String,
  expires_in: Integer,
  timestamp: Date,
}`;

  const spotify_auth_code = `const express = require("express");
const request = require("request");
const querystring = require("querystring");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();

const client_id = "your_client_id";
const port = 3000;
const redirect_uri = "http://localhost:" + port + "/callback";
const client_secret = "your_client_secret";
const uri = "your_connection_string";
const dbName = "spotify-credentials";
const collectionName = "tokens";
const documentId = "your_document_id";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged db deployment. Successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.get("/login", function (req, res) {
  const state = Math.random().toString(36).substring(7);
  const scope = "user-read-currently-playing";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback", function (req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    // console.log(authOptions);
    console.log("Making Request for Token");

    request.post(authOptions, async function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // console.log("Auth response:", body);
        console.log("Received the tokens");
        const accessToken = body.access_token;
        const refreshToken = body.refresh_token;
        const expires_in = body.expires_in;
        const timestamp = new Date();
        try {
          console.log("Connecting to  DB");
          await client.connect();
          const db = client.db(dbName);
          const collection = db.collection(collectionName);
          console.log("Updating DB...");
          await collection.replaceOne(
            { _id: new ObjectId(documentId) },
            {
              access_token: accessToken,
              refresh_token: refreshToken,
              expires_in: expires_in,
              timestamp: timestamp,
            }
          );

          console.log("DB Save complete!");
        } catch (error) {
          console.log("Something went wrong while saving to DB");
          console.error(error);
        } finally {
          await client.close();
        }
      } else {
        console.error("Error:", error || body);
      }
    });
  }
});

app.listen(port, () => {
  console.log("Spotify-Auth listening on port 3000");
});`;

  const component_code = `const client = new MongoClient(process.env.MONGODB_URI!, {
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
                <h3 className="font-semibold text-lg max-w-36 truncate">
                  {ok.trackName}
                </h3>

                {/* <p className="text-sm"></p> */}
                <p className="text-sm max-w-36 truncate">
                  {ok.artists.join(", ")}
                </p>
              </div>
            </div>
            <div className="justify-self-end">
              {/* <Link target="_blank" href={ok.trackURL}> */}
              <Link target="_blank" href="">
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
      \`Saved timestamp: \${timestamp.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}\`
    );

    console.log(
      \`Current timestamp: \${currtime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}\`
    );

    console.log(\`Expires in: \${expiresIn} ms\`);

    console.log(
      \`Do I need to refresh my token? \${(currtime.getTime() - timestamp.getTime()) / 1000 >= expiresIn}\`
    );

    if ((currtime.getTime() - timestamp.getTime()) / 1000 >= expiresIn) {
      console.log("Refreshing token");
      const url = "https://accounts.spotify.com/api/token"; // Use the actual Spotify URL

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: \`Basic \${Buffer.from(clientId + ":" + clientSecret).toString("base64")}\`,
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
        console.error(errorText);
        return {
          ok: null,
          error: "Refresh response did not contain an access_token.",
        };
      } else {
        const response = await body.json();
        accessToken = response.access_token; // Update the access token

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
        Authorization: "Bearer " + accessToken,
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
`;

  return (
    <div className="px-4 pb-4 md:px-14 lg:px-64">
      <h1 className="text-3xl font-semibold mt-4 text-primary md:text-4xl">
        How to Add Spotify Currently Playing to Your Website
      </h1>
      <br />
      <h2 className="text-sm text-secondary">Published on 8th April 2025</h2>
      <br />
      <div className={`${fontSerif.className} text-justify`}>
        <p>
          Being an avid music fan, I have always enjoyed sharing and discussing
          the music I listen to. When I first came across Discord's feature that
          displays the music you're currently playing, I thought it would be
          great to add something similar to my personal website.
        </p>
        <br />
        <p>
          Last month, I finally got around to implementing it! In this blog, I
          aim to document my process and demonstrate how easy it is to achieve
          this using React Server Components (RSC) and the Spotify API.
        </p>
        <div className="flex justify-center my-8">
          <Image
            width={444}
            height={270}
            alt="Spotify demo"
            src={"/spotify-demo.gif"}
          />
        </div>
        <p>
          The first step is to create an app on the{" "}
          <Link href="https://developer.spotify.com/documentation/web-api">
            Spotify Developer Dashboard
          </Link>
          . This will allow you to obtain the necessary OAuth tokens.
        </p>
        <div className="flex justify-center my-8">
          <Image
            width={1932}
            height={1200}
            alt="Flowchart"
            src={"/flowchart.jpg"}
          />
        </div>
        <p>
          Next, create a database to store the necessary tokens. This will
          become clear as we proceed. I've used MongoDB, but you can choose any
          database you prefer.
        </p>
        <br />
        <p>
          Once you have a database, create a document/table with the following
          attributes:
        </p>
        <CodeBlock language="json" filename="schema.json" code={code} />
        <p>
          Now, go to the app page you just created on your Spotify account and
          grab the <code>client_id</code> and <code>client_secret</code>{" "}
          strings. Store them somewhere safe, as you'll need them shortly.
        </p>
        <br />
        <p>
          The next step involves setting up a server that allows you to log in
          with Spotify and store the access tokens in the database for use by
          your website's Spotify component.
        </p>
        <br />
        <p>
          You can use any language or library for this. I chose Node.js with an
          Express server because it was the most straightforward solution for
          me.
        </p>
        <CodeBlock language="js" filename="auth.js" code={spotify_auth_code} />
        <p>
          Keep in mind that we are updating a single database entry each time.
          If you're using an SQL database, get the <Code>id</Code> or any other
          identifier for a specific row in the table. If you're using a NoSQL
          solution like MongoDB, get the <Code>document_id</Code> of a single
          document.
        </p>
        <br />
        <p>
          Run this server and navigate to <Code>localhost:3000/login</Code> (or
          whatever URL you specified). Note that you'll need to add{" "}
          <Code>http://localhost:3000</Code> as one of the Callback URLs for
          your Spotify app. Opening the URL in your browser should trigger the
          Spotify authentication flow. Accept it and check your database to see
          if it has been populated.
        </p>
        <br />
        <p>
          Assuming everything worked fine, let's move on to adding the Spotify
          component to your website. I'll be using React with Next.js for this
          demo, but you can adapt it to your framework of choice.
        </p>
        <br />
        <p>
          The task now is to connect our website to the database, retrieve the
          tokens, make a request using those tokens, and get the currently
          playing song from the response.
        </p>
        <br />
        <p>
          React Server Components are perfect for this use case. Here's the
          source code for my component. I won't explain every line for the sake
          of brevity, but I recommend focusing on the{" "}
          <Code>getCurrentPlaying()</Code> function.
        </p>
        <CodeBlock
          language="tsx"
          filename="Spotify.tsx"
          code={component_code}
        />
        <p>
          Notice how I use the <Code>refresh_token</Code> and{" "}
          <Code>expires_in</Code> fields from the database to get new tokens
          when the last saved time exceeds the expiry limit. This ensures the
          service keeps running without further intervention.
        </p>
        <br />
        <p>
          And that's it! You can explore many more possibilities with this
          approach. I recommend diving into the Spotify APIs to get more ideas.
        </p>
      </div>
      <div className="my-4">
        <iframe
          src="https://amkhrjee.substack.com/embed"
          className="w-full bg-transparent"
        ></iframe>
        <br />
        <Button
          startContent={<FaShare />}
          onPress={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: document.title,
                  url: window.location.href,
                })
                .catch((error) => console.error("Error sharing:", error));
            } else {
              console.warn("Web Share API is not supported in this browser.");
            }
          }}
        >
          Share
        </Button>
      </div>
    </div>
  );
}
