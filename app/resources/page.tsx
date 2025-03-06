import { readFileSync } from "fs";

import Markdown from "react-markdown";

export default function Page() {
  const path = "./app/resources/data.md";
  const markdown = readFileSync(path, { encoding: "utf8" });

  return (
    <div className="p-4 prose text-foreground prose-h2:text-foreground prose-h3:text-foreground prose-a:text-primary">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
