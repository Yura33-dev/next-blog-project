import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "Getting started with Next JS",
    image: "getting-started-nextjs.png",
    date: "2024-02-10",
    slug: "getting-started-with-next-js",
    summary:
      "Next JS is the React Framework for production. It makes building fullstack React apps and web sites",
  },
  {
    title: "Getting started with Next JS 2",
    image: "getting-started-nextjs.png",
    date: "2024-03-22",
    slug: "getting-started-with-next-js-2",
    summary:
      "Next JS is the React Framework for production. It makes building fullstack React apps and web sites 2",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
