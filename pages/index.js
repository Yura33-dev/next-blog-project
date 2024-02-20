import Head from 'next/head';

import FeaturedPost from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';

import { getFeaturedPosts } from '@/helpers/post-utils';

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Main | NextJS Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
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
