import FeaturedPost from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

import { getFeaturedPosts } from "@/helpers/post-utils";

function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPost posts={posts} />
    </>
  );
}

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
