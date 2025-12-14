import About from "@/components/ui/about";
import ProjectTablet from "@/components/ui/project-tablet";

type Project = {
  link: string;
  title: string;
  shortDescription: string;
};

export default function Home() {
  const projects: Project[] = [
    {
      link: "https://fontonic.amkhrjee.in",
      title: "Fontonic",
      shortDescription:
        "Browser extension with 6000+ daily active users. Written in TypeScript.",
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
        "GPT-2 based LLM written from scratch and pre-trained in Assamese on RTX 4090 for 70 hours.",
    },
    {
      link: "https://ai-aniruddha.streamlit.app",
      title: "AI Clone",
      shortDescription:
        "RAG-based AI clone built with LangChain and Gemini API. Written in Python and hosted on Streamlit.",
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
      link: "https://github.com/amkhrje/ocwd",
      title: "ocwd",
      shortDescription:
        "Scraper and bulk-downloaded for MIT courses. Written in shell scripts. 700+ downloads on PSGallery.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <About />
      <div className="flex-1">
        <div>
          <h1 className="text-xl font-semibold">Stuff I've made</h1>
          <p>in no particular order</p>
        </div>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
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
      </div>
    </div>
  );
}
