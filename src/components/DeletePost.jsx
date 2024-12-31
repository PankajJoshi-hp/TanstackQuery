import axios from "axios";
import React from "react";
import { useMutation } from "react-query";

const DeletePost = () => {
  const mutation = useMutation(() =>
    axios.delete("https://fakestoreapi.com/products/1")
  );

  const deleteData = () => {
    mutation.mutate();
  };

  if (mutation.isLoading) {
    return <span>Deleting...</span>;
  }
  if (mutation.error) {
    return <span>Error: {mutation.error.message}</span>;
  }
  if (mutation.isSuccess) {
    return <span>Deleted SuccessFully.</span>;
  }

  return (
    <div>
      <button onClick={deleteData}>Delete</button>
    </div>
  );
};

export default DeletePost;
