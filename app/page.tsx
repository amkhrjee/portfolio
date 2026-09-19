"use client";
import About from "@/components/ui/about";
import ExperienceTimeline, {
  type TimelineEntry,
} from "@/components/ui/experience-timeline";
import ImageStackGallery from "@/components/ui/image-stack-gallery";
import ProjectTablet from "@/components/ui/project-tablet";
import { Card, Link, Tabs } from "@heroui/react";
import { LuAppWindowMac, LuBriefcaseBusiness, LuFlower } from "react-icons/lu";

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

  const GIC_IMAGES = [
    {
      src: "/GIC/Photo-01.webp",
      alt: "Explaining my poster to a visitor",
      caption: "Explaining my poster to a visitor",
    },
    {
      src: "/GIC/Photo-02.webp",
      alt: "Me with my poster",
      caption: "",
    },
    {
      src: "/GIC/Photo-03.webp",
      alt: "Explaining my poster to a visitor",
      caption: "Explaining my poster to a visitor",
    },
  ];

  const MRW_IMAGES = [
    {
      src: "/MRW/Photo.webp",
      alt: "My poster",
      caption: "My poster",
    },
  ];

  const experience: TimelineEntry[] = [
    {
      period: "2025-Present",
      title: "Graduate Researcher",
      organisation:
        "Koita Center for Digital Health, Indian Institute of Technology Bombay",
      description: "",
    },
    {
      period: "2025",
      title: "Research Intern",
      organisation:
        "Department of Computer Science & Engineering, Indian Institute of Technology Patna",
      description:
        "Worked at the Metaverse Lab on implementing RL algorithms for an ongoing research paper.",
    },
    {
      period: "Earlier",
      title: "Full Stack Engineering Intern",
      organisation: "Foodable",
      description:
        "Worked on the UI and backend at a Delhi-based startup during my final year of high school.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <About />
      <div className="flex-1">
        <Tabs defaultSelectedKey="projects" variant="secondary">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Portfolio sections">
              <Tabs.Tab id="projects">
                <LuAppWindowMac />
                <span className="ml-2">Projects</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="activities">
                <LuFlower />
                <span className="ml-2">Activities</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="experience">
                <LuBriefcaseBusiness />
                <span className="ml-2">Experience</span>
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
            <div className="flex flex-col gap-4">
              <Card>
                <Card.Header className="font-semibold">
                  Teaching Programming to Graduate Students
                </Card.Header>
                <Card.Content>
                  <p>
                    I teach MATLAB through mathematical modeling to master’s and
                    PhD students as part of BB709, with{" "}
                    <Link href="https://www.bio.iitb.ac.in/people/faculty/agrawal-dk/">
                      Prof. Deepak Agrawal
                    </Link>
                    .
                    <br />
                    Code used in sessions are available via{" "}
                    <Link href="https://github.com/amkhrjee/bb709">GitHub</Link>
                    .
                  </p>
                </Card.Content>
              </Card>
              <Card>
                <Card.Header className="font-semibold">
                  Speaking at IndiaFOSS 2026
                </Card.Header>
                <Card.Content>
                  <p>
                    I will speaking about Seqout at{" "}
                    <Link href="https://fossunited.org/indiafoss/2026">
                      IndiaFOSS 2026
                    </Link>{" "}
                    in Bengaluru on 27th September.
                    <br />
                    Event will be live-streamed via the{" "}
                    <Link href="https://www.youtube.com/@FOSSUnited">
                      FOSS United YouTube channel
                    </Link>
                    .
                  </p>
                </Card.Content>
              </Card>
              <Card>
                <Card.Header className="font-semibold">
                  Poster at the Genomics India Conference 2026
                </Card.Header>
                <Card.Content>
                  <div className="flex gap-4 items-center justify-start">
                    <ImageStackGallery images={GIC_IMAGES} />
                    <p>
                      I presented a poster at the{" "}
                      <Link href="https://genomicsindia.co.in/">GIC 2026</Link>,
                      held in Bengaluru on 1st September.
                    </p>
                  </div>
                </Card.Content>
              </Card>
              <Card>
                <Card.Header className="font-semibold">
                  <p>
                    Poster at the <em>Mathematics of the Real World</em>{" "}
                    workshop
                  </p>
                </Card.Header>
                <Card.Content>
                  <div className="flex gap-4 items-center justify-start">
                    <ImageStackGallery images={MRW_IMAGES} />
                    <p>
                      Presented a poster at the{" "}
                      <Link href="https://www.math.iitb.ac.in/~amp/index.html">
                        applied mathematics workshop
                      </Link>{" "}
                      organised by the department of mathematics at IIT Bombay
                      on 26th August.
                    </p>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </Tabs.Panel>
          <Tabs.Panel id="experience">
            <ExperienceTimeline entries={experience} />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
