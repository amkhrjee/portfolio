import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { LuMail, LuMapPin, LuSparkles } from "react-icons/lu";

import { Link } from "@heroui/react";

const baseLinkClassName =
  "inline-flex items-center justify-center gap-2 rounded-md border border-default px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-default-100";
const primaryLinkClassName =
  "inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:opacity-90";
const iconLinkClassName =
  "inline-flex h-11 w-11 items-center justify-center rounded-md border border-default text-foreground transition-colors hover:bg-default-100";

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
          </Link>
          , working at the intersection of computer science and biology with{" "}
          <Link className="hover:underline" href="https://saketlab.in/">
            Prof. Saket Choudhary
          </Link>
          . My research focuses on analyzing and improving pipelines for
          single-cell gene expression data. I also worked on building a{" "}
          <Link className="hover:underline" href="https://seqout.org">
            search engine
          </Link>{" "}
          for sequence datasets. I completed my bachelor's in computer science
          and engineering at{" "}
          <Link className="hover:underline" href="https://www.tezu.ernet.in/">
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
        <Link href="mailto:amkhrjee@gmail.com" className={baseLinkClassName}>
          <LuMail />
          Email me
        </Link>
        <Link className={primaryLinkClassName} href="/chat">
          <LuSparkles />
          Chat with my AI
        </Link>
      </div>

      <div className="pt-4">
        <p>I'm available to connect via the following channels:</p>
        <div className="pt-4 flex flex-row gap-2 justify-start">
          <Link
            className={baseLinkClassName}
            href="https://www.linkedin.com/in/amkhrjee/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
            LinkedIn
          </Link>
          <Link
            className={baseLinkClassName}
            href="https://github.com/amkhrjee"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
            GitHub
          </Link>
          <Link
            aria-label="X / Twitter"
            href="https://x.com/amkhrjee"
            rel="noopener noreferrer"
            target="_blank"
            className={baseLinkClassName}
          >
            <FaXTwitter /> Twitter/X
          </Link>
          {/* <Link
            aria-label="Goodreads"
            className={iconLinkClassName}
            href="https://goodreads.com/amkhrjee"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGoodreadsG />
          </Link> */}
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
