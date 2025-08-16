import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

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
          <p className="text-2xl">+ explore more</p>
        </CardBody>
      </Card>
    </Link>
  );
}
