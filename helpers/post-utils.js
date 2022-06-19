import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "blog-content"); // creates filepath pointing to blog-content

export function createPostData(file) {
  // whatever is passed either a slug or a filename with md --- do the replace method.
  const postSlug = file.replace(/\.md$/, ""); // removes .md extension

  // explicitly add the md extenstion  to get the filepath
  const filepath = path.join(postDirectory, `${postSlug}.md`); // creates filepath for file to read
  const fileContent = fs.readFileSync(filepath, "utf-8"); // read specific file

  const { data, content } = matter(fileContent); // parse file using gray matter
  // - data is the meta data content is the content

  // return object from read file with data , content and slug
  // create new object with the content, the metadata and a slug to be used for dynamic routing
  const postData = {
    ...data,
    slug: postSlug,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles(); // reads all files in blog-content directory
  // console.log(postFiles);

  // maps through all files and runs createPostData for each file, converting the markdown files into jsx
  const allPostArray = postFiles
    .map((post) => {
      return createPostData(post);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allPostArray;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}

export function getPostFiles() {
  return fs.readdirSync(postDirectory); // reads all files in blog-content directory
}
