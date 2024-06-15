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

function App() {
  return (
    <>
      <div className="flex gap-4 items-center w-full">
        <div>
          <Avatar src="./assets/potrait.jpg" size="lg" />
        </div>
        <div>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            Aniruddha Mukherjee
          </p>
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
              href="https://linkedin.com/in/amkhrjee"
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
        I am interested in compilers, operating systems, distributed systems,
        backend technolgies and much more! I believe in the importance of web,
        and thus, can do my fair share of web development. These days I tend to
        spend my free time learning ML and AI.
        <br />
        <br />I am open to internships and work opportunities. You can view and
        download my CV{" "}
        <Link
          isExternal
          showAnchorIcon
          href="https://drive.google.com/file/d/1poAXITsGkyNtfsJlnhfZiLiUrp1Bm7JV/view?usp=sharing"
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
                Simple LR for BMI model (as of now). Made as an university
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
                300+ users. Let's you customize the fonts of any website with
                locally installed fonts. Cross-browser compatible. Written
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
                manage orders. Made as university project.
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
                350+ users (pwsh-only metrics; not counting bash installs).
                Let's you download course materials for MIT courses in bulk at
                ease. Pure shell scripts.
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
          </Tab>
          <Tab key="music" title="Latest Blog Posts">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
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
          Last updated:{" "}
          {new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </>
  );
}

export default App;
