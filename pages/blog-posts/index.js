import { getAllPosts } from "../../helpers/post-utils";
import AllPosts from "../../components/ui/AllPosts";
import Head from "next/head";

function AllBlogPosts(props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A collection of all blog posts about web development by the author."
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
}

export default AllBlogPosts;

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
