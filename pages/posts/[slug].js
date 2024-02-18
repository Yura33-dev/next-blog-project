import PostContent from "@/components/posts/post-detail/post-content";

import { getPostData, getPostsFiles } from "@/helpers/post-utils";

function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const postSlug = context.params.slug;

  const post = getPostData(postSlug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
