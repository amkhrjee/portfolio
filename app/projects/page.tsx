"use client";

import { GoSortDesc } from "react-icons/go";
import { LuChevronDown } from "react-icons/lu";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { useState } from "react";
import { Button } from "@heroui/button";

import { projects } from "./data";

import Project from "@/components/project";

export default function Page() {
  const [sortby, setSortby] = useState<Set<string>>(new Set(["latest"]));
  const [category, setCategory] = useState<Set<string>>(new Set(["software"]));

  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <Dropdown>
          <DropdownTrigger>
            <Button endContent={<LuChevronDown />} variant="solid">
              {category.has("software")
                ? "Software Engineering"
                : "Machine Learning"}
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
            <DropdownItem key="software">Software Engineering</DropdownItem>
            <DropdownItem key="ml">Machine Learning</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button startContent={<GoSortDesc />} variant="flat">
              Sort by: {sortby}
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
            <DropdownItem key="latest">Latest</DropdownItem>
            <DropdownItem key="popularity">Popularity</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {sortby.has("latest") &&
          projects
            .filter((project) => category.has(project.category))
            .sort((a, b) => -a.date.localeCompare(b.date))
            .map((project) => (
              <Project
                key={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                title={project.title}
                users={project.users}
              />
            ))}
        {sortby.has("popularity") &&
          projects
            .filter((project) => category.has(project.category))
            .sort((a, b) => b.users - a.users)
            .map((project) => (
              <Project
                key={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                title={project.title}
                users={project.users}
              />
            ))}
      </div>
    </>
  );
}
