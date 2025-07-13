export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aniruddha Mukherjee",
  description: "Personal website and portfolio of Aniruddha Mukherjee - Software Engineer and Web Developer. Explore my projects, blog, and resources.",
  navItems: [
    {
      label: "Home",
      href: "/",
      ariaLabel: "Home page",
      keywords: "portfolio, home, landing page"
    },
    {
      label: "Resources",
      href: "/resources",
      ariaLabel: "Development resources and tools",
      keywords: "development resources, tools, guides"
    },
    {
      label: "Blog",
      href: "/blog",
      ariaLabel: "Technical blog and articles",
      keywords: "blog, technical articles, web development"
    },
    {
      label: "Projects",
      href: "/projects",
      ariaLabel: "Portfolio projects and case studies",
      keywords: "portfolio projects, case studies, web development"
    },
  ],
};
