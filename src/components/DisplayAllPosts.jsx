import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const getPosts = async (page = 1) => {
  const res = await axios.get(`https://fakestoreapi.com/products?page=${page}`);
  return res.data;
};

const DisplayAllPosts = () => {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery(["productsData", page], () => getPosts(page), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>Fetching data...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul className="">
        {posts.map((post) => {
          const filteredDescription = post.description.split(".")[0];
          return (
            <li key={post.id} className="mb-10">
              <img src={post.image} alt="" className="w-[20%]" />
              <h2>{post.title}</h2>
              <h1 className="font-bold">{post.price}</h1>
              <h3>{filteredDescription}</h3>
            </li>
          );
        })}
      </ul>

      <div>
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          Previous
        </button>
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DisplayAllPosts;
