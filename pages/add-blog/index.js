import { Fragment } from "react";
import { useRouter } from 'next/router'

import BlogForm from "../../components/blogForm/BlogForm";

function AddBlog() {
  const router = useRouter()

  // Send request to the backend to add a new blog
  const addBlogHandler = async (data) => {
    const response = await fetch("/api/new-blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    router.push("/")
  };

  return (
    <Fragment>
      <h1>Add Blog</h1>
      <BlogForm addBlogHandler={addBlogHandler} />
    </Fragment>
  );
}

export default AddBlog;
