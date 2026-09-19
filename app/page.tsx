import About from "@/components/ui/about";
import ProjectTablet from "@/components/ui/project-tablet";
import { Tabs } from "@heroui/react";
import { LuBriefcaseBusiness } from "react-icons/lu";

type Project = {
  link: string;
  title: string;
  shortDescription: string;
};

export default function Home() {
  const projects: Project[] = [
    {
      link: "https://seqout.org",
      title: "Seqout",
      shortDescription:
        "Search, retrieval, and metadata harmonisation for public sequencing datasets.",
    },
    {
      link: "https://fontonic.amkhrjee.in",
      title: "Fontonic",
      shortDescription:
        "Browser extension with 20,000+ daily active users. Written in TypeScript.",
    },
    {
      link: "https://github.com/amkhrjee/tinypy",
      title: "tinypy",
      shortDescription:
        "Linear algebra library written from scratch in Python. Supports advanced matrix operations.",
    },
    {
      link: "/",
      title: "Lipika",
      shortDescription:
        "GPT-2 based LLM developed from scratch and pre-trained in Assamese at Tezpur University.",
    },
    {
      link: "https://github.com/amkhrjee/pathfinder",
      title: "Pathfinder",
      shortDescription:
        "AI path-finding algorithms visualiser written in Go with Raylib. Cross-OS desktop application.",
    },
    {
      link: "https://github.com/amkhrjee/wp",
      title: "wp",
      shortDescription:
        "Parser and scraper for Wikipedia written in Rust. Heavily utilizes multi-threading.",
    },
    {
      link: "https://github.com/amkhrjee/ocwd",
      title: "ocwd",
      shortDescription:
        "Scraper and bulk-downloader for MIT courses. Written in shell scripts. 900+ downloads on PSGallery.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <About />
      <div className="flex-1">
        <Tabs defaultSelectedKey="projects">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Portfolio sections">
              <Tabs.Tab id="projects">
                <LuBriefcaseBusiness />
                <span className="ml-2">Projects</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="activities">
                Activities
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel id="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {projects.map((project) => (
                <ProjectTablet
                  key={project.title}
                  link={project.link}
                  title={project.title}
                  shortDescription={project.shortDescription}
                />
              ))}
              <ProjectTablet isLast />
            </div>
          </Tabs.Panel>
          <Tabs.Panel id="activities">
            <div>
              <h1 className="text-xl font-semibold">Activities</h1>
              <p>things I'm currently working on and exploring</p>
            </div>
            <div className="py-4">
              <p className="text-muted-foreground text-sm">
                Activity feed and recent highlights coming soon.
              </p>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
