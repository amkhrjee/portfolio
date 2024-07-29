import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

function App() {
  const [lang, setLang] = useState(0);
  const [commitDate, setCommitDate] = useState("...");
  useEffect(() => {
    fetch("https://api.github.com/repos/amkhrjee/portfolio/commits?per_page=1")
      .then((res) => res.json())
      .then((commits) => {
        const lastCommitDate = commits[0].commit.author.date;
        const formattedDate = new Date(lastCommitDate).toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        setCommitDate(formattedDate);
      })
      .catch((error) => console.error(error));
  });
  return (
    <>
      <div className="flex gap-4 items-center w-full">
        <div>
          <Avatar src="./assets/potrait.jpg" size="lg" />
        </div>
        <div onClick={() => setLang((lang + 1) % 3)}>
          {lang == 0 && (
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              Aniruddha Mukherjee
            </p>
          )}
          {lang == 1 && (
            <p
              style={{
                fontFamily: "Noto Serif Bengali",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              অনিরুদ্ধ মুখোপাধ্যায়
            </p>
          )}
          {lang == 2 && (
            <p
              style={{
                fontFamily: "Tiro Devanagari Hindi",
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              अनिरुद्ध मुखर्जी
            </p>
          )}

          <p
            style={{
              fontStyle: "italic",
            }}
          >
            Software Engineer • CS Undergrad
          </p>
          <div className="flex gap-4">
            <Link isExternal href="https://github.com/amkhrjee" showAnchorIcon>
              GitHub
            </Link>
            <Link
              isExternal
              href="https://www.linkedin.com/in/amkhrjee"
              showAnchorIcon
            >
              LinkedIn
            </Link>

            <Link isExternal href="https://x.com/amkhrjee" showAnchorIcon>
              X
            </Link>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        Hi. I am a final year computer science undergrad. I am passionate about
        compilers, operating systems, databases, distributed systems and much
        more!
        <br />
        <br />
        You can check out my{" "}
        <Link isExternal showAnchorIcon href="https://resources.amkhrjee.xyz">
          collection
        </Link>{" "}
        of helpful resources for learning various CS, Math & ML topics.
        <br />
        <br />I am open to internship and work opportunities. You can view and
        download my CV{" "}
        <Link
          isExternal
          showAnchorIcon
          href="https://drive.google.com/file/d/1jSa0t8sg1ANROsAfSHTisdto7MgH64BZ/view?usp=sharing"
        >
          here
        </Link>
        .
      </div>
      <br />
      <div className="flex justify-center w-full flex-col">
        <Tabs className="justify-center sticky top-0 z-50" aria-label="Options">
          <Tab key="photos" title="Recent Projects">
            <Card>
              <CardHeader className="flex-col items-start">
                <div>BMI Estimation from Images</div>
                <div>
                  <Link
                    href="https://bmiweb.amkhrjee.xyz"
                    isExternal
                    showAnchorIcon
                  >
                    bmiweb.amkhrjee.xyz
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                Tries to estimate BMI from image. MTCNN for face extraction.
                Simple LR for BMI model (as of now). Made as a university
                project.
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>Fontonic Browser Extension</div>
                <div>
                  <Link
                    href="https://fontonic.amkhrjee.xyz"
                    isExternal
                    showAnchorIcon
                  >
                    fontonic.amkhrjee.xyz
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                350+ users. Lets you customize the typography of any website
                with locally installed fonts. Cross-browser compatible. Written
                without any frameworks.
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>Automation of 3D printing process</div>
                <div>
                  <Link
                    href="https://proshandstore.amkhrjee.xyz"
                    isExternal
                    showAnchorIcon
                  >
                    proshandstore.amkhrjee.xyz
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                Automated the entire pipeline of ordering and 3D printing of
                prosthetic hands. Made Windows native client for admins to
                manage orders. Made as a university project.
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>MIT OpenCourseWare Downloader (CLI)</div>
                <div>
                  <Link
                    href="https://github.com/amkhrjee/ocwd"
                    isExternal
                    showAnchorIcon
                  >
                    github.com/amkhrjee/ocwd
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                350+ users (pwsh-only metrics; not counting bash installs). Lets
                you download course materials for MIT courses in bulk at ease.
                Pure shell scripts.
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>PyGraphia (Python library)</div>
                <div>
                  <Link
                    href="https://pypi.org/project/pygraphia/"
                    isExternal
                    showAnchorIcon
                  >
                    pypi.org/project/pygraphia
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                Python library for working with graph data structures. Made
                while taking Graph Theory course at university.
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>GH Lines Browser Extension</div>
                <div>
                  <Link
                    href="https://ghlines.amkhrjee.xyz"
                    isExternal
                    showAnchorIcon
                  >
                    ghlines.amkhrjee.xyz
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                A chrome extension that shows line counts of files in the GitHub
                source tree.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Latest Blog Posts">
            <Card>
              <CardBody>Will be updated soon...</CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <br />
      <div>
        <p className="text-center">Thanks for the visit! ❤️</p>
        <p
          className="text-center"
          style={{
            fontStyle: "italic",
          }}
        >
          Last updated: {commitDate}
        </p>
      </div>
    </>
  );
}

export default App;
