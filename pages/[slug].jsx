import React from "react";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: "_VwJbRSzYMmM-5SeMt9xOe2EkIUdcBeHLTZMvSWR_-g",
});

const PostDetails = ({ post }) => {
  console.log(post);
  return (
    <div>
      <span>post details</span>
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  const posts = await client.getEntries().then(function (entries) {
    return entries.items;
  });

  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogpost",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: items[0],
    },
  };
}
