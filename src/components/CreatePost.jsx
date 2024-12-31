import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation((newPost) =>
    axios.post(
      "https://fakestoreapi.com/products",
      newPost
      //   console.log(newPost)
    )
  );

  const subMitData = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }
  if (mutation.isSuccess) {
    return <span>Post Submitted Successfully</span>;
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="body"
      />

      <button onClick={subMitData}>Submit Data</button>
    </div>
  );
};

export default CreatePost;
