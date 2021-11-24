import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import BlogItem from "../components/blogItem/BlogItem";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <title>Next.JS crash course</title>
        <meta name="description" content="This is a next.js crash course" />
      </Head>

      <h1>Blog Page</h1>
      {props.blogPosts.map((blog) => (
        <div key={blog.id} className="flex flex-col">
          <BlogItem
            title={blog.title}
            image={blog.image}
            description={blog.description}
            details={blog.details}
            slug={blog.slug}
          />
        </div>
      ))}
    </Fragment>
  );
}

export async function getStaticProps(context) {
  // Send request to a backend api
  // Read the fs ....
  // Securely connect to a database

// Add mongoDB connection string here
  const client = await MongoClient.connect(
    ""
  );

  const blogPostsCollection = client.db().collection("posts")

  const blogPosts = await blogPostsCollection.find().toArray()

  client.close()

  return {
    props: {
      blogPosts: blogPosts.map(blog => ({
        title: blog.title,
        description: blog.description,
        image: blog.image,
        id: blog._id.toString(),
        slug: blog.slug
      })),
    },
    revalidate: 3600, // Every hour 10, 60
  };
}

export default HomePage;


// export async function getServerSideProps(context) {
//   const { req, res } = context
//   // Give you access to the incoming request, headers, body etc
//   // Send request to a backend api
//   // Read the fs ....
//   // Securely connect to a database

//   return {
//     props: {
//       blogPosts: BLOG_POSTS
//     }
//   }
// }
