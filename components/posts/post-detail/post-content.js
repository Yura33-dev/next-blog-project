import ReactMarkdown from "react-markdown";

import classes from "./post-content.module.css";

import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Getting started with Next JS",
  image: "getting-started-nextjs.png",
  date: "2024-02-10",
  slug: "getting-started-with-next-js",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
