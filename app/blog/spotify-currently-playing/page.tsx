import { fontSerif } from "@/config/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-semibold mt-4 text-primary">
        Add Spotify Current Playing to your website with React Server Component
        (using NextJS)
      </h1>
      <br />
      <h2 className="text-sm text-secondary">Published on: 8th April 2025</h2>
      <br />
      <div className={`${fontSerif.className} text-justify`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
          perspiciatis, sed nihil minima consectetur eveniet? Minima
          voluptatibus libero laboriosam assumenda, ad incidunt tempora dolorem
          natus excepturi ab! Esse ducimus dolore officiis illo saepe odio
          maxime perspiciatis dicta, voluptate ratione quibusdam tempora
          accusantium quidem ea, autem aliquid magnam tenetur necessitatibus.
        </p>
        <Image
          className="p-2"
          width={444}
          height={270}
          alt="spotify demo"
          src={"/spotify-demo.gif"}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt
          nobis neque suscipit, ab ducimus velit esse fugiat nemo harum
          laudantium, eius sunt adipisci, dicta corrupti quos assumenda porro
          molestiae repellat. Eveniet quasi tempore quo perspiciatis ratione
          quia nisi commodi maiores neque quam omnis illum, nesciunt aliquid
          temporibus doloribus accusantium?
        </p>
        <div></div>
      </div>
    </div>
  );
}
