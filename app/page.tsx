"use client";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import {
  LuClipboardList,
  LuEye,
  LuFilePen,
  LuGithub,
  LuMail,
} from "react-icons/lu";
import { TbBubble } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "@heroui/link";
import { redirect } from "next/navigation";
import { LuChartNoAxesCombined } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <div className="p-4 flex flex-row gap-4 items-center">
        <Image
          alt="My Photo"
          className="rounded-2xl"
          src="/potrait.png"
          width={120}
        />
        <div>
          <p>Hi,👋🏻</p>
          <p className="text-3xl">I&apos;m Aniruddha.</p>
        </div>
      </div>
      <div className="p-4">
        <p>
          I&apos;m a <u>software engineer</u> with an eye for design.
        </p>
        <br />
        <p>
          I&apos;m a fresh CS graduate with deep interests in web, databases,
          distributed systems, data and everything in-between. You can view my{" "}
          <Link isExternal showAnchorIcon color="foreground" href="#">
            <u>resume</u>
          </Link>
          .
        </p>
      </div>
      <div className="p-4 flex flex-row gap-4">
        <Button color="success" startContent={<LuMail />} variant="bordered">
          Contact me
        </Button>
        <Button
          color="default"
          startContent={<LuEye />}
          variant="bordered"
          onPress={() => redirect("/projects")}
        >
          View my work
        </Button>
      </div>
      <Divider />
      <div className="p-4">
        <p>Connect with me</p>
        <br />
        <div className="flex flex-row gap-2 justify-start">
          <Button isIconOnly size="lg" variant="bordered">
            <FaLinkedinIn />
          </Button>
          <Button isIconOnly size="lg" variant="bordered">
            <LuGithub />
          </Button>
          <Button isIconOnly size="lg" variant="bordered">
            <FaXTwitter />
          </Button>
          <Button
            color="warning"
            size="lg"
            startContent={<TbBubble />}
            variant="bordered"
          >
            Thoughts
          </Button>
        </div>
        <br />
        <p>
          Althought extremely irregular, I try to write a blog-post every once
          in a while. I also maintain a collection of helpful learning
          resources.
        </p>
        <br />

        <div className="flex flex-row gap-2 justify-start">
          <Button size="lg" startContent={<LuFilePen />} variant="bordered">
            Blog
          </Button>
          <Button
            size="lg"
            startContent={<LuClipboardList />}
            variant="bordered"
            onPress={() => redirect("/resources")}
          >
            Resources
          </Button>
        </div>
      </div>
      <br />
      <div className="text-center bottom-0">
        <p className="flex items-center justify-center gap-2">
          <LuChartNoAxesCombined /> 1.2K visitors
        </p>
        <br />
        <p>© Aniruddha Mukherjee, 2025</p>
      </div>
    </>
  );
}
