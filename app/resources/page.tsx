import { readFileSync } from "fs";

import Markdown from "react-markdown";

export default function Page() {
  const path = "./app/resources/data.md";
  const markdown = readFileSync(path, { encoding: "utf8" });

  return (
    <div className="p-4 prose">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
