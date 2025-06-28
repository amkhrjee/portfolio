"use client";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Tooltip as HeroTooltip } from "@heroui/tooltip";
import { motion } from "framer-motion";

import { HiOutlineSpeakerWave } from "react-icons/hi2";

import { Link } from "@heroui/link";
import { redirect } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  LuClipboardList,
  LuEye,
  LuFilePen,
  LuMail,
  LuSparkles,
} from "react-icons/lu";

import { FaGoodreadsG } from "react-icons/fa";

import { LanguageContext } from "@/app/context/LanguageContext";
import { Language } from "@/config/definitions";
import { strings } from "@/config/strings";
import { ReactNode, useContext, useRef } from "react";

export default function HomeProvider({ children }: { children: ReactNode }) {
  const language = useContext(LanguageContext);
  // explanation for weird audio stuff: https://stackoverflow.com/a/67610596/12404524
  const englishAudioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/English.aac") : undefined
  );
  const banglaAudioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/Bangla.aac") : undefined
  );

  return (
    <div className="md:px-14 lg:px-96">
      <div className="p-4 flex flex-row gap-4 items-center ">
        <Image
          alt="My Photo"
          className="rounded-2xl"
          src="/potrait.jpg"
          width={120}
        />
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.15 }}
        >
          <p>{strings[language]["hero-hi"]}</p>
          <div className="flex items-center  gap-2">
            <p className="text-2xl">{strings[language]["hero-intro"]}</p>
            <HeroTooltip content="Listen to me pronounce my name!">
              <Button
                isIconOnly
                variant="flat"
                onPress={() => {
                  if (language === Language.en) {
                    englishAudioRef.current?.play();
                  } else {
                    banglaAudioRef.current?.play();
                  }
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
        className="p-4"
      >
        <p>{strings[language]["hero-title"]}</p>
        <br />
        <p>
          {strings[language]["hero-desc"]}{" "}
          <Link
            target="_blank"
            isExternal
            showAnchorIcon
            href="https://drive.google.com/file/d/1NOtS3oVLpQQdmEpaFtWOe7dqBj34d1yF/view?usp=sharing"
          >
            <u>{strings[language]["resume-label"]}</u>
          </Link>
          {language === Language.en ? "." : ""}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -40 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 flex flex-col md:flex-row gap-4"
      >
        <div className="flex flex-row gap-4">
          <Button
            as={Link}
            href="mailto:amkhrjee@gmail.com"
            color="success"
            startContent={<LuMail />}
            variant="bordered"
          >
            {strings[language]["contact-label"]}
          </Button>
          <Button
            as={Link}
            href="/projects"
            color="default"
            startContent={<LuEye />}
            variant="bordered"
          >
            {strings[language]["view-work-label"]}
          </Button>
        </div>
        <Button
          as={Link}
          target="_blank"
          href={"https://ai-aniruddha.streamlit.app/"}
          startContent={<LuSparkles />}
        ></Button>
      </motion.div>
      <Divider />
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="p-4">
          <p>{strings[language]["connect-with-me-title"]}</p>
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
          <p>{strings[language]["outro-desc"]}</p>
          <br />

          <div className="flex flex-row gap-2 justify-start">
            <Button
              onPress={() => redirect("/blog")}
              size="lg"
              startContent={<LuFilePen />}
              variant="bordered"
            >
              Blog
            </Button>
            <Button
              size="lg"
              startContent={<LuClipboardList />}
              variant="bordered"
              onPress={() => redirect("https://resources.amkhrjee.in//")}
            >
              Resources
            </Button>
          </div>
        </div>
        {children}
        <br />
        <div className="p-4 bottom-0">
          <p>© Aniruddha Mukherjee, 2025</p>
        </div>
      </motion.div>
    </div>
  );
}
