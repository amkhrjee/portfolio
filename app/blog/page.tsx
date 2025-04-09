import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { PiHandsClappingLight } from "react-icons/pi";

export default function Blog() {
  return (
    <div className="md:px-14 lg:px-64">
      <div className="p-4">
        <p>
          Hi 👋 and welcome to me blog. Here I write things ranging from
          technical to philosophical.
        </p>
        <br />
        <p>
          If you'd like to get these delivered to your inbox when I publish
          them, consider subscribing via substack.
        </p>
        <br />
        <p>Substack thing here</p>
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="text-2xl font-semibold">Posts</p>
        <Button>Sort by</Button>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader className="block font-semibold text-lg text-primary">
            <Link href={"/blog/spotify-currently-playing"}>
              Add Spotify Current Playing to your website with React Server
              Component (using NextJS)
            </Link>
            <p className="text-sm mt-4 text-secondary">
              Published on: 8th April 2025
            </p>
          </CardHeader>
          <CardBody>
            Learn how I added the "Currently I'm listening to" section to my
            blog and how you can do it too! (while learning a ton about how
            React Server Components work)
          </CardBody>
          <CardFooter className="flex justify-between items-center">
            <Chip startContent={<PiHandsClappingLight />} color="success">
              34 appreciations
            </Chip>
            <Button startContent={<FaBook />} color="primary">
              Read
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
