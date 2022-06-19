import Head from "next/head";
import PostHeader from "../../components/ui/PostHeader";
import styles from "../../styles/BlogPost.module.css";
import ReactMarkdown from "react-markdown";
import { createPostData, getPostFiles } from "../../helpers/post-utils";
import Image from "next/image";

import { PrismLight } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

PrismLight.registerLanguage("js", js);
PrismLight.registerLanguage("ts", ts);
PrismLight.registerLanguage("jsx", jsx);

function BlogPost({ blogPost }) {
  const { title, image, slug } = blogPost;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={700}
          height={350}
        />
      );
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <PrismLight language={language} children={children} style={atomDark} />
      );
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`A blog post about ${title}`} />
      </Head>
      <article className={styles.blogPost}>
        <PostHeader imagePath={imagePath} title={title} />
        <ReactMarkdown components={customRenderers}>
          {blogPost.content}
        </ReactMarkdown>
      </article>
    </>
  );
}

export default BlogPost;

export const getStaticPaths = () => {
  const allPosts = getPostFiles();

  const paths = allPosts.map((post) => {
    const slug = post.replace(/\.md$/, "");

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const slug = context.params.slug;
  const blogPost = createPostData(slug);

  return {
    props: {
      blogPost,
    },
    revalidate: 600,
  };
};
