import { LanguageContext } from "@/app/context/LanguageContext";
import { fontSans } from "@/config/fonts";
import { strings } from "@/config/strings";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { useContext } from "react";

export default function Project(props: {
  title: string;
  link: string;
  tags: string[];
  description: string;
  users?: number;
}) {
  const language = useContext(LanguageContext);
  return (
    <Card className="md:h-full">
      <CardHeader
        className={`${fontSans.className} flex flex-col items-start gap-2`}
      >
        <div className="w-full flex justify-between items-center">
          <Link
            isExternal
            showAnchorIcon
            className="text-2xl font-semibold"
            color="primary"
            href={props.link}
          >
            {props.title}
          </Link>
          {props.users ? (
            <span className="text-sm text-warning">
              {props.users}+ {strings[language]["users-label"]}
            </span>
          ) : (
            ""
          )}
        </div>
        {/* <div className="flex gap-2">
          {props.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div> */}
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{props.description}</p>
      </CardBody>
    </Card>
  );
}
