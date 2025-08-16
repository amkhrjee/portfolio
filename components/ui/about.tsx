"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Tooltip as HeroTooltip } from "@heroui/tooltip";
import { motion } from "framer-motion";

import { HiOutlineSpeakerWave } from "react-icons/hi2";

import { Link } from "@heroui/link";
import { redirect } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";
import { LuClipboardList, LuFile, LuMail, LuSparkles } from "react-icons/lu";

import { FaGoodreadsG } from "react-icons/fa";

import { useRef } from "react";

export default function About() {
  // explanation for weird audio stuff: https://stackoverflow.com/a/67610596/12404524
  const englishAudioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/English.aac") : undefined
  );

  return (
    <main className="flex-1">
      <div className="pt-4 flex flex-row gap-4 items-center ">
        <Image
          alt="My photo"
          className="rounded-2xl"
          src="/potrait.jpg"
          width={120}
        />
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.15 }}
        >
          <p>Hi! 👋🏻</p>
          <div className="flex items-center  gap-2">
            <p className="text-2xl font-semibold">I'm Aniruddha.</p>
            <HeroTooltip content="Listen to me pronounce my name!">
              <Button
                isIconOnly
                variant="flat"
                onPress={() => {
                  englishAudioRef.current?.play();
                }}
              >
                <HiOutlineSpeakerWave />
              </Button>
            </HeroTooltip>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: -40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.3 }}
        className="pt-4"
      >
        <p>
          I like to make cool stuff with computers and math. I'm currently a
          grad student at IIT Bombay in the Biosciences and Bioengineering
          department. I did my undergrad in Computer Science at Tezpur
          University.
        </p>
        <br />
        <p>
          My current focus is in machine learning, genomics, brain-computer
          interfaces, drug discovery with AI and, of course, making cool
          software!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -40 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.5 }}
        className="pt-4 flex gap-4"
      >
        <div className="flex flex-row gap-4">
          <Button
            as={Link}
            href="mailto:amkhrjee@gmail.com"
            color="success"
            startContent={<LuMail />}
            variant="bordered"
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="pt-4">
          <br />
          <div className="flex flex-row gap-2 justify-start">
            <HeroTooltip content="Linkedin">
              <Button
                onPress={() =>
                  redirect("https://www.linkedin.com/in/amkhrjee/")
                }
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <FaLinkedinIn />
              </Button>
            </HeroTooltip>
            <HeroTooltip content="GitHub">
              <Button
                as={Link}
                href="https://github.com/amkhrjee"
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <FaGithub />
              </Button>
            </HeroTooltip>
            <HeroTooltip content="X/Twitter">
              <Button
                as={Link}
                href="https://x.com/amkhrjee"
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <FaXTwitter />
              </Button>
            </HeroTooltip>
            <HeroTooltip content="Goodreads">
              <Button
                as={Link}
                href="https://goodreads.com/amkhrjee"
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <FaGoodreadsG />
              </Button>
            </HeroTooltip>
            <HeroTooltip content="Bluesky">
              <Button
                as={Link}
                href="https://bsky.app/profile/amkhrjee.bsky.social"
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <FaBluesky />
              </Button>
            </HeroTooltip>
          </div>
          <br />
          <p>
            I maintain a blog and resources page where I sporadically post
            things that I find interesting.
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
      </motion.div>
    </main>
  );
}
