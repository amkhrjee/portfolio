import Image from "next/image";
import { LuFileText, LuMail, LuMapPin } from "react-icons/lu";

import { Button, Link } from "@heroui/react";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <main className="flex-1">
      <div className="pt-4 flex flex-row gap-4 items-center ">
        <Image
          alt="My photo"
          className="rounded-2xl"
          src="/potrait.jpg"
          width={120}
          height={120}
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
          <Link className="hover:underline" href="https://www.iitb.ac.in/">
            IIT Bombay
            <Link.Icon />
          </Link>
          , working at the intersection of computer science and biology at{" "}
          <Link className="hover:underline" href="https://saketlab.in/">
            Saket Lab
            <Link.Icon />
          </Link>
          . My research focuses on developing and improving computational
          pipelines for single-cell gene expression data, along with building
          tools that simplify and accelerate the work of computational
          biologists. I completed my bachelor's in computer science and
          engineering at{" "}
          <Link className="hover:underline" href="https://www.tezu.ernet.in/">
            Tezpur University
            <Link.Icon />
          </Link>
          .
        </p>
        <br />
        <p>
          Outside the lab, you’ll usually find me hiking, reading, or subjecting
          my colleagues to a stream of facts about my latest hobby or obsession.
          I enjoy talking about books, movies, video games, and computers.
        </p>
      </div>
      <div className="mt-4 flex gap-4">
        <Button
          variant="primary"
          onClick={() => (window.location.href = "mailto:amkhrjee@gmail.com")}
        >
          <LuMail />
          Email me
          {/* </Link> */}
        </Button>
        <Button
          variant="tertiary"
          onClick={() =>
            (window.location.href = "https://github.com/amkhrjee/")
          }
        >
          <FaGithub />
          GitHub
        </Button>
        <Button
          variant="tertiary"
          onClick={() => (window.location.href = "/CV_Aniruddha.pdf")}
        >
          <LuFileText />
          CV
        </Button>
      </div>

      <div className="pt-4">
        <p>
          I'm available to connect via{" "}
          <Link
            href="https://www.linkedin.com/in/amkhrjee/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
            <Link.Icon />
          </Link>{" "}
          and{" "}
          <Link
            aria-label="X / Twitter"
            href="https://x.com/amkhrjee"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter/X
            <Link.Icon />
          </Link>
          .
        </p>

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
          <p className="font-serif italic">
            “All we have to decide is what to do with the time that is given to
            us.”
          </p>
          <p className="text-right">
            -{" "}
            <Link
              className="hover:underline"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
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
