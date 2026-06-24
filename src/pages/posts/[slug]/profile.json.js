import postsData from "../../../data/posts.json";

const postModules = import.meta.glob("../../../posts/*/profile.json", { eager: true });

export function getStaticPaths() {
  return postsData.posts
    .filter((post) => post.status === "published")
    .map((post) => ({ params: { slug: post.slug } }));
}

export function GET({ params }) {
  const profileModule = postModules[`../../../posts/${params.slug}/profile.json`];
  const profile = profileModule?.default ?? profileModule;

  if (!profile) {
    return new Response(JSON.stringify({ error: "Profile not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(profile, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
