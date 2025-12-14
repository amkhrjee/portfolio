import { Card, CardBody } from "@heroui/card";
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
    <Link href={link} target="_blank">
      <Card isHoverable className="h-full">
        <CardBody>
          <strong>{title}.</strong> {shortDescription}
        </CardBody>
      </Card>
    </Link>
  ) : (
    <Link href={"https://github.com/amkhrjee"} className="h-full">
      <Card isHoverable className="h-full">
        <CardBody className="flex justify-center items-center">
          <div className="text-sm flex items-center gap-2">
            <FaBinoculars /> Explore more of my projects
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
