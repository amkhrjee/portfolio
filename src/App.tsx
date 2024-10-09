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
  // interface Post {
  //   title: string;
  //   summary: string;
  //   slug: string;
  // }
  const [commitDate, setCommitDate] = useState("...");
  // const [posts, setPosts] = useState<Post[]>([]);
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

    // fetch("https://blog.amkhrjee.xyz:4000/latest/json")
    //   .then((res) => res.json())
    //   .then((rows) => setPosts(rows))
    //   .catch((error) => console.error(error));
  });
  return (
    <>
      <div className="flex gap-4 items-center w-full">
        <div>
          <Avatar src="./assets/potrait.jpg" radius="md" isBordered size="lg" />
        </div>
        <div className="cursor-pointer">
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
            Computer Science Undergrad
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
        <p>
          Hi. I love building stuff. I'm interested in compilers, databases,
          operating systems & everything in-between!
        </p>
        <br />
        <p>
          You can check out my{" "}
          <Link isExternal showAnchorIcon href="https://resources.amkhrjee.xyz">
            collection
          </Link>{" "}
          of helpful resources for learning various CS, Math & ML topics.
        </p>
        <br />
        <p>
          I'm available via <Link href="mailto:amkhrjee@gmail.com">email</Link>.
          You can view and download my{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://drive.google.com/file/d/1DphaJkAcQtxL1-jUV8hp-iOuByzs8bAy/view?usp=sharing"
          >
            resumé
          </Link>
        </p>
      </div>
      <br />

      <div className="flex justify-center w-full flex-col">
        <Tabs className="justify-center sticky top-0 z-50" aria-label="Options">
          <Tab key="photos" title="Recent Projects">
            <Card>
              <CardHeader className="flex-col items-start">
                <div>wp: wikipedia parser</div>
                <div>
                  <Link
                    href="https://github.com/amkhrjee/wp"
                    isExternal
                    showAnchorIcon
                  >
                    github.com/amkhrjee/wp
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                Scrape and download wikipedia as plaintext for training your
                language models. 14 Indian languages supported including
                Sanskrit and Pali.
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
                1000+ users. Lets you customize the typography of any website
                with locally installed fonts. Cross-browser compatible. Written
                without any frameworks.
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>MIT OpenCourseWare Downloader (ocwd)</div>
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
                500+ users (pwsh-only metrics; Unix/Linux installs are
                untracked). Lets you download course materials for MIT courses
                in bulk at ease. Pure shell scripts.
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>Pathfinder</div>
                <div>
                  <Link
                    href="https://github.com/amkhrjee/pathfinder"
                    isExternal
                    showAnchorIcon
                  >
                    github.com/amkhrjee/pathfinder/
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                Cool visualisation for various search algorithms in AI. Got
                semi-viral on reddit.{" "}
                <Link
                  underline="hover"
                  href="https://www.reddit.com/r/computerscience/comments/1fw9q09/made_an_app_to_visualise_different_search/"
                >
                  View the reddit post
                </Link>
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>Automation of 3D printing process</div>
                <div>
                  <Link
                    href="https://proshandstore.vercel.app"
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
              <CardHeader className="flex-col items-start">
                <div>But what's database pooling?</div>
                <div>
                  <Link
                    href={`https://blog.amkhrjee.xyz/posts/database-pooling/`}
                    isExternal
                    showAnchorIcon
                  >
                    /posts/database-pooling
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                Talks about the concept of connection pooling in the context of
                databases.
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader className="flex-col items-start">
                <div>Docker Bind Mounts & Volumes</div>
                <div>
                  <Link
                    href={`https://blog.amkhrjee.xyz/posts/docker-bind-mounts-volumes/`}
                    isExternal
                    showAnchorIcon
                  >
                    /posts/docker-bind-mounts-volumes
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                Discusses the differences between Docker bind mounts and Docker
                volumes. Also goes into details about when each is useful.
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
          Last updated: {commitDate}
        </p>
      </div>
    </>
  );
}

export default App;
