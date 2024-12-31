import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const retrievePost = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

const DisplayPost = ({ id }) => {
  const {
    data: post,
    error,
    isLoading,
  } = useQuery(["productData", id], () => retrievePost(id));

  // Log the post data to ensure it's being fetched correctly
  console.log(post);

  if (isLoading) {
    return <div>Fetching Post...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data: {error.message}</div>;
  }

  if (!post) {
    return <div>No data found for the given ID.</div>;
  }

  const filteredDescription = post.description.split(".")[0];

  return (
    <div className="flex bg-gray-100 min-h-screen items-start px-5 py-5">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <li key={post.id} className="mb-10">
          <img src={post.image} alt={post.title} className="w-[20%]" />
          <h2>{post.title}</h2>
          <h1>
            <span className="font-bold">{post.price}</span>
          </h1>
          <h3>{filteredDescription}</h3>
        </li>
      </ul>
    </div>
  );
};

export default DisplayPost;
