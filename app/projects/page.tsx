"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { GoSortDesc } from "react-icons/go";
import { LuChevronDown } from "react-icons/lu";

import { projects } from "./data";

import Project from "@/components/project";
import { strings } from "@/config/strings";
import { LanguageContext } from "../context/LanguageContext";

export default function Page() {
  const [sortby, setSortby] = useState<Set<string>>(new Set(["popularity"]));
  const [category, setCategory] = useState<Set<string>>(new Set(["software"]));
  const language = useContext(LanguageContext);
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
        >
          <Dropdown>
            <DropdownTrigger>
              <Button endContent={<LuChevronDown />} variant="solid">
                {category.has("software")
                  ? strings[language]["software-engg-label"]
                  : strings[language]["machine-learning-label"]}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Single selection"
              selectedKeys={category}
              selectionMode="single"
              variant="solid"
              // @ts-ignore
              onSelectionChange={setCategory}
            >
              <DropdownItem key="software">
                {strings[language]["software-engg-label"]}
              </DropdownItem>
              <DropdownItem key="ml">
                {strings[language]["machine-learning-label"]}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
        >
          <Dropdown>
            <DropdownTrigger>
              <Button startContent={<GoSortDesc />} variant="flat">
                {strings[language]["sort-by"]}:{" "}
                {Array.from(sortby).join("") === "latest"
                  ? strings[language]["latest"]
                  : strings[language]["popularity"]}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Single selection"
              selectedKeys={sortby}
              selectionMode="single"
              variant="flat"
              // @ts-ignore
              onSelectionChange={setSortby}
            >
              <DropdownItem key="latest">
                {strings[language]["latest"]}
              </DropdownItem>
              <DropdownItem key="popularity">
                {strings[language]["popularity"]}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </motion.div>
      </div>

      <div className="p-4 flex flex-col gap-4 md:grid grid-cols-2">
        {sortby.has("latest") &&
          projects
            .filter((project) => category.has(project.category))
            .sort((a, b) => -a.date.localeCompare(b.date))
            .map((project) => (
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.5 }}
                key={project.title}
              >
                <Project
                  description={project.description[language]}
                  link={project.link}
                  tags={project.tags}
                  title={project.title}
                  users={project.users}
                />
              </motion.div>
            ))}
        {sortby.has("popularity") &&
          projects
            .filter((project) => category.has(project.category))
            .sort((a, b) => b.users - a.users)
            .map((project) => (
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.5 }}
                key={project.title}
              >
                <Project
                  description={project.description[language]}
                  link={project.link}
                  tags={project.tags}
                  title={project.title}
                  users={project.users}
                />
              </motion.div>
            ))}
      </div>
    </>
  );
}
