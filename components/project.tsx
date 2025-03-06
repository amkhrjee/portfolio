import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

export default function Project(props: {
  title: string;
  link: string;
  tags: string[];
  description: string;
  users?: number;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-start gap-2">
        <div className="w-full flex justify-between items-center">
          <Link
            isExternal
            showAnchorIcon
            className="text-2xl font-semibold"
            color="primary"
            href="#"
          >
            {props.title}
          </Link>
          {props.users ? (
            <span className="text-sm text-success">{props.users}+ users</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2">
          {props.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{props.description}</p>
      </CardBody>
    </Card>
  );
}
