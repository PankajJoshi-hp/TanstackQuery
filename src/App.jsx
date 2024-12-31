import React from "react";
import DisplayPost from "./components/DisplayPost";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import DeletePost from "./components/DeletePost";
import DisplayAllPosts from "./components/DisplayAllPosts";

const App = () => {
  return (
    <>
      {/* <DisplayPost id={1} /> */}
      <DisplayAllPosts />
      {/* <CreatePost />
      <UpdatePost />
      <DeletePost /> */}
    </>
  );
};

export default App;
