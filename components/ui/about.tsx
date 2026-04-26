import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { LuMail, LuMapPin, LuSparkles } from "react-icons/lu";

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
          . My research focuses on analyzing and improving pipelines for
          single-cell gene expression data. I also worked on building a{" "}
          <Link underline="hover" href="https://seqout.org">
            search engine
          </Link>{" "}
          for sequence datasets. I completed my bachelor's in computer science
          and engineering at{" "}
          <Link underline="hover" href="https://www.tezu.ernet.in/">
            Tezpur University
          </Link>
          .
        </p>
        <br />
        <p>
          Outside the lab, you’ll usually find me hiking, reading, or subjecting
          my colleagues to a stream of facts about my latest hobby or obsession.
          I enjoy talking about movies, video games, and computers.
        </p>
      </div>
      <div className="pt-4 flex gap-4">
        <div className="flex flex-row gap-4">
          <Button
            as={Link}
            href="mailto:amkhrjee@gmail.com"
            color="default"
            startContent={<LuMail />}
          >
            Email me
          </Button>
        </div>
        <Button
          as={Link}
          className="w-min"
          color="primary"
          target="_blank"
          href={"https://ai-aniruddha.streamlit.app/"}
          startContent={<LuSparkles />}
        >
          Chat with my AI
        </Button>
      </div>

      <div className="pt-4">
        <p>I'm available to connect via the following channels:</p>
        <div className="pt-4 flex flex-row gap-2 justify-start">
          <Button
            as={Link}
            href="https://www.linkedin.com/in/amkhrjee/"
            size="lg"
            variant="bordered"
          >
            <FaLinkedinIn /> LinkedIn
          </Button>
          <Button
            as={Link}
            href="https://github.com/amkhrjee"
            size="lg"
            variant="bordered"
          >
            <FaGithub /> GitHub
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
        {/* <p>
          My writings can be found at{" "}
          <Link underline="hover" href="/writings">
            /writings
          </Link>
          .
        </p> */}
        <br />
        <div className="text-default-600">
          <p>
            “All we have to decide is what to do with the time that is given to
            us.”
          </p>
          <p className="text-right">
            -{" "}
            <Link
              style={{ color: "inherit" }}
              target="_blank"
              underline="hover"
              href="https://www.youtube.com/watch?v=hdAN0o3oqB8"
            >
              Gandalf to Frodo at the mines of Moria
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
