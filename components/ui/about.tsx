import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  LuClipboardList,
  LuFile,
  LuMail,
  LuMapPin,
  LuSparkles,
} from "react-icons/lu";

import { FaGoodreadsG } from "react-icons/fa";

export default function About() {
  return (
    <main className="flex-1">
      <div className="pt-4 flex flex-row gap-4 items-center ">
        <Image
          alt="My photo"
          className="rounded-2xl"
          src="/potrait.jpg"
          width={120}
        />
        <div className="flex flex-col gap-2">
          <p>Hey there,</p>
          <p className="text-2xl font-semibold">I'm Aniruddha.</p>
          <div className="flex gap-1 items-center text-sm">
            <LuMapPin />
            Mumbai & Kolkata, India
          </div>
        </div>
      </div>
      <div className="pt-4">
        <p>
          I am a master's student at{" "}
          <Link underline="hover" href="https://www.iitb.ac.in/">
            IIT Bombay
          </Link>
          , working at the intersection of computer science and biology with{" "}
          <Link underline="hover" href="https://saketlab.in/">
            Prof. Saket Choudhary
          </Link>
          . I completed my bachelor's in computer science and engineering at{" "}
          <Link underline="hover" href="https://www.tezu.ernet.in/">
            Tezpur University
          </Link>
          .
        </p>
        <br />
        <p>
          My current interests lie in applying artificial intelligence and
          data-driven methods to decode gene regulation and other complex
          biological systems. Outside of research, I enjoy recreational
          programming, hiking, and reading science fiction, history and
          sometimes, philosophy.
        </p>
      </div>
      <div className="pt-4 flex gap-4">
        <div className="flex flex-row gap-4">
          <Button
            as={Link}
            href="mailto:amkhrjee@gmail.com"
            color="secondary"
            startContent={<LuMail />}
            variant="shadow"
          >
            Email me
          </Button>
        </div>
        <Button
          as={Link}
          className="w-min"
          variant="shadow"
          color="primary"
          target="_blank"
          href={"https://ai-aniruddha.streamlit.app/"}
          startContent={<LuSparkles />}
        >
          Chat with my AI
        </Button>
      </div>

      <div className="pt-4">
        <br />
        <div className="flex flex-row gap-2 justify-start">
          <Button
            as={Link}
            href="https://www.linkedin.com/in/amkhrjee/"
            isIconOnly
            size="lg"
            variant="bordered"
          >
            <FaLinkedinIn />
          </Button>
          <Button
            as={Link}
            href="https://github.com/amkhrjee"
            isIconOnly
            size="lg"
            variant="bordered"
          >
            <FaGithub />
          </Button>
          <Button
            as={Link}
            href="https://x.com/amkhrjee"
            isIconOnly
            size="lg"
            variant="bordered"
          >
            <FaXTwitter />
          </Button>
          <Button
            as={Link}
            href="https://goodreads.com/amkhrjee"
            isIconOnly
            size="lg"
            variant="bordered"
          >
            <FaGoodreadsG />
          </Button>
        </div>
        <br />
        <p>
          I maintain a blog and resources page where I sporadically post things
          that I find interesting.
        </p>
        <br />

        <div className="flex flex-row gap-2 justify-start">
          <Button
            as={Link}
            href="https://blog.amkhrjee.in"
            size="lg"
            startContent={<LuFile />}
            variant="faded"
          >
            Blog
          </Button>
          <Button
            as={Link}
            href="https://resources.amkhrjee.in/"
            size="lg"
            startContent={<LuClipboardList />}
            variant="faded"
          >
            Resources
          </Button>
        </div>
      </div>
    </main>
  );
}
