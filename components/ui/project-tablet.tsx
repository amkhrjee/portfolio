import { Card } from "@heroui/react";
import Link from "next/link";
import { FaBinoculars } from "react-icons/fa";

type ProjectTabletProps = {
  isLast?: boolean;
  link?: string;
  title?: string;
  shortDescription?: string;
};

export default function ProjectTablet({
  link = "/",
  title,
  shortDescription,
  isLast = false,
}: ProjectTabletProps) {
  return !isLast ? (
    <Link className="block h-full" href={link} target="_blank">
      <Card className="h-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <Card.Content>
          <strong>{title}.</strong> {shortDescription}
        </Card.Content>
      </Card>
    </Link>
  ) : (
    <Link className="block h-full" href={"https://github.com/amkhrjee"}>
      <Card className="h-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <Card.Content className="flex justify-center items-center">
          <div className="text-sm flex items-center gap-2">
            <FaBinoculars /> Explore more of my projects
          </div>
        </Card.Content>
      </Card>
    </Link>
  );
}
