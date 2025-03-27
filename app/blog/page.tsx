import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import { PiHandsClappingLight } from "react-icons/pi";

export default function Blog() {
  return (
    <div className="px-6">
      <p>
        Hi there! welcome to my blog. I've been trying to get back to my writing
        habit off late. I say "going back" becasue I used to write a lot during
        my high school days. I lost that habit while preparing for college
        entrance exams and life got hectic in university after that.
      </p>
      <br />
      <p>
        You can expect a mix of technical, philosophical and perhaps even
        comical stuff here.
      </p>
      <br />
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">Posts</p>
        <ButtonGroup>
          <Button isIconOnly color="secondary">
            <CiGrid41 />
          </Button>
          <Button isIconOnly>
            <CiBoxList />
          </Button>
        </ButtonGroup>
      </div>
      <br />
      <div>
        <Card>
          <CardHeader className="font-semibold text-lg">
            Add Spotify Current Playing to your website with React Server
            Component (using NextJS)
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
            <Button color="primary">Read -{">"}</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
