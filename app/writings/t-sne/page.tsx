export default async function BlogPostPage() {
  return (
    <article>
      <h1 className={`text-4xl md:text-5xl font-semibold`}>
        t-SNE: one step at a time
      </h1>
      <p className="mt-2 text-default-500">
        Ever wondered how the heck t-SNE actually works? Well, this answers
        that!
      </p>
      <br />
      <div className="max-w-screen-xl text-default-600 flex items-center gap-2 justify-between">
        <p>Published on 27th April, 2026</p>
        20 minutes read
      </div>
      <br />
      <div
        style={{ fontFamily: "CMU Sans Serif" }}
        className="max-w-screen-xl text-justify"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          ullam sed quia ratione tenetur voluptate? Rem fugiat inventore beatae
          quae ut obcaecati praesentium in ullam quos fuga unde error
          repudiandae vero officiis temporibus maiores aperiam corporis porro
          dolor, ex pariatur fugit! Pariatur sit eius voluptas provident neque,
          minus corporis qui dicta iusto, maxime ea? Sed quo, sequi nemo vel
          velit iure provident libero quod repellendus nostrum eaque ad
          accusamus impedit, magni dignissimos molestiae tempora excepturi odit
          adipisci doloremque consequuntur aliquam! Ad saepe, sed amet
          architecto laborum ea fuga rem suscipit, eos eligendi praesentium
          ipsa, perferendis iusto asperiores ducimus. Aliquam, porro?
        </p>
      </div>
    </article>
  );
}
