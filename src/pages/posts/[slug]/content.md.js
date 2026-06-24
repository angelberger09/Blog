import postsData from "../../../data/posts.json";

const contentModules = import.meta.glob("../../../posts/*/content.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export function getStaticPaths() {
  return postsData.posts
    .filter((post) => post.status === "published")
    .map((post) => ({ params: { slug: post.slug } }));
}

export function GET({ params }) {
  const markdown = contentModules[`../../../posts/${params.slug}/content.md`];

  if (!markdown) {
    return new Response("# Content not found\n", {
      status: 404,
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  }

  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
