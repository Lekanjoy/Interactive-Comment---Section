import { useState, useEffect } from "react";
import data from "./data.json";
import Comments from "./components/Comments";
import CommentBox from "./components/CommentBox";

function App() {
  const commentsData = data;
  let [userDetails, setUserDetails] = useState(commentsData.comments);

  // Add Comments
  function addComment(newComment) {
    let id = Math.floor(Math.random() * 1000) + 1;
    const upDatedComment = { ...newComment, id };
    setUserDetails((prevComment) => [...prevComment, upDatedComment]);
    // console.log([...userDetails, upDatedComment]);
  }

  // Delete Comment
  function deleteComment(id) {
    setUserDetails(userDetails.filter((comment) => comment.id != id));
    console.log("Deleted comment with id:", id);
  }

  // Edit Comment
  function editComment(id, text) {
    setUserDetails(userDetails.filter((comment) => comment.id != id));
    console.log("Edited comment with id:", id + " and value: " + text);
  }

  // CurrentUser Data
  const currentUser = commentsData.currentUser;

  // Comment Value
  const [content, setContent] = useState("");
  function handleComment(e) {
    setContent(`${e.target.value}`);
  }
  // Update Text
  const [updateText, setUpdateText] = useState("SEND");

  return (
    <div className="App relative bg-VeryLightGray font-Rubik w-full h-full flex flex-col items-center p-8 md:px-40">
      <Comments
        commentData={userDetails}
        currentUser={currentUser}
        commentState={commentsData}
        deleteComment={deleteComment}
        editComment={editComment}
        setContent={setContent}
        handleComment={handleComment}
        setUpdateText={setUpdateText}
      />
      <CommentBox
        commentState={commentsData}
        addComment={addComment}
        content={content}
        setContent={setContent}
        handleComment={handleComment}
        updateText={updateText}
        setUpdateText={setUpdateText}
      />
    </div>
  );
}

export default App;
