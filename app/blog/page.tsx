import { Card, CardBody, CardHeader } from "@heroui/card";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="md:px-14 lg:px-64">
      <div className="p-4">
        <p>
          Hi and welcome to my blog. Here I write things ranging from technical
          to philosophical.
        </p>
        <br />
        <p>
          If you'd like to get these delivered to your inbox when I publish
          them, consider subscribing via substack.
        </p>
        <br />
        <iframe
          src="https://amkhrjee.substack.com/embed"
          className="w-full bg-transparent"
        ></iframe>
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="text-2xl font-semibold">Posts</p>
        {/* <Button>Sort by</Button> */}
      </div>
      <div className="p-4">
        <Card>
          <CardHeader className="block font-semibold text-lg text-primary">
            <Link href={"/blog/spotify-currently-playing"}>
              How to add Spotify Current Playing to your website
            </Link>
            <p className="text-sm mt-4 text-secondary">
              Published on 8th April 2025
            </p>
          </CardHeader>
          <CardBody>
            Learn how I added the "Currently I'm listening to" section to my
            blog and how you can do it too!
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
