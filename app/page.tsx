"use client";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Tooltip as HeroTooltip } from "@heroui/tooltip";
import { motion } from "framer-motion";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

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
import { redirect, RedirectType } from "next/navigation";
import { MdQueryStats } from "react-icons/md";

import { FaGoodreadsG } from "react-icons/fa";
import { BanglaSans, fontMono } from "@/config/fonts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import { useContext } from "react";
import { strings } from "@/config/strings";
import { LanguageContext } from "./context/LanguageContext";
import { Language } from "@/config/definitions";
import { addToast } from "@heroui/toast";

export default function Home() {
  const language = useContext(LanguageContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const countryData = [
    {
      country: "🇮🇳 India",
      views: 150,
    },
    {
      country: "🇺🇸 USA",
      views: 180,
    },
    {
      country: "🇧🇷 Brazil",
      views: 150,
    },
    {
      country: "🇩🇪 Germany",
      views: 130,
    },
    {
      country: "🇯🇵 Japan",
      views: 100,
    },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <div className="lg:px-28">
      <div className="p-4 flex flex-row gap-4 items-center ">
        <Image
          alt="My Photo"
          className="rounded-2xl"
          src="/potrait.png"
          width={120}
        />
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.15 }}
        >
          <p>{strings[language]["hero-hi"]}</p>
          <p className="text-3xl">{strings[language]["hero-intro"]}</p>
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
            isExternal
            showAnchorIcon
            color="foreground"
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
        className="p-4 flex flex-row gap-4"
      >
        <Button
          color="success"
          startContent={<LuMail />}
          variant="bordered"
          onPress={() => (window.location.href = "mailto:amkhrjee@gmail.com")}
        >
          {strings[language]["contact-label"]}
        </Button>
        <Button
          color="default"
          startContent={<LuEye />}
          variant="bordered"
          onPress={() => redirect("/projects")}
        >
          {strings[language]["view-work-label"]}
        </Button>
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
                onPress={() => redirect("https://linkedin.com/amkhrjee")}
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <FaLinkedinIn />
              </Button>
            </HeroTooltip>
            <HeroTooltip content="GitHub">
              <Button
                onPress={() => redirect("https://github.com/amkhrjee")}
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <LuGithub />
              </Button>
            </HeroTooltip>
            <HeroTooltip content="X/Twitter">
              <Button
                onPress={() => redirect("https://x.com/amkhrjee")}
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <FaXTwitter />
              </Button>
            </HeroTooltip>
            <HeroTooltip content="Goodreads">
              <Button
                onPress={() => redirect("https://goodreads.com/amkhrjee")}
                isIconOnly
                size="lg"
                variant="bordered"
              >
                <FaGoodreadsG />
              </Button>
            </HeroTooltip>
            <Button
              onPress={() => {
                addToast({
                  title: "Coming soon",
                  description: "Under construction",
                });
              }}
              color="warning"
              size="lg"
              startContent={<TbBubble />}
              variant="bordered"
            >
              Thoughts
            </Button>
          </div>
          <br />
          <p>{strings[language]["outro-desc"]}</p>
          <br />

          <div className="flex flex-row gap-2 justify-start">
            <Button
              onPress={() => redirect("https://amukhrjee.substack.com/")}
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
              onPress={() => redirect("/resources")}
            >
              Resources
            </Button>
          </div>
        </div>
        <br />
        <div className="p-4 bottom-0">
          <p>© Aniruddha Mukherjee, 2025</p>
        </div>
      </motion.div>
    </div>
  );
}
