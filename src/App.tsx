import { Avatar, Card, CardBody, Link, Tab, Tabs } from "@nextui-org/react";

function App() {
  return (
    <>
      <div className="flex gap-4 items-center w-full">
        <div className="">
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
        <br />I am open to internships and work. You can view and download my CV{" "}
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
        <Tabs aria-label="Options">
          <Tab key="photos" title="Photos">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
