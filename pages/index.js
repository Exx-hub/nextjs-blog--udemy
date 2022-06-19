import Head from "next/head";
import Featured from "../components/ui/Featured";
import Hero from "../components/ui/Hero";
import { getFeaturedPosts } from "../helpers/post-utils";

export default function Home({ featured }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Featured blog posts about web development"
        />
      </Head>

      <main style={{ backgroundColor: "lightgray" }}>
        <Hero />
        <Featured featured={featured} />
      </main>
    </>
  );
}

export const getStaticProps = () => {
  const featured = getFeaturedPosts();

  return {
    props: {
      featured,
    },
  };
};
