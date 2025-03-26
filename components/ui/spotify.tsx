import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { motion } from "framer-motion";
import { AiOutlineSpotify } from "react-icons/ai";

export default function Spotify() {
  return (
    <Card className="m-4">
      <CardHeader>
        <div className="flex gap-2 items-center">
          {/* <span>
            <FaHeadphones />
          </span> */}
          <div className="flex gap-1 items-end">
            {[0.2, 0.3, 0.4].map((delay, i) => (
              <motion.div
                key={i}
                className="w-1 bg-foreground rounded-sm"
                initial={{ height: 2 }}
                animate={{ height: [2, 10, 2] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay,
                }}
              />
            ))}
          </div>
          <span>Currently listening to</span>
        </div>
      </CardHeader>
      <CardBody className="flex flex-row justify-between items-center">
        <div className="flex gap-4 items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Avatar
              isBordered
              size="lg"
              src="https://c.saavncdn.com/978/Roshni-Hi-Roshni-Hai-Unknown-2025-20250224112835-500x500.jpg"
            />
          </motion.div>
          <div>
            <h3 className="font-semibold">Roshni Hi Roshni Hai</h3>
            <p className="text-sm">Gabbar</p>
          </div>
        </div>
        <div className="justify-self-end">
          <Button variant="bordered" startContent={<AiOutlineSpotify />}>
            Play
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
