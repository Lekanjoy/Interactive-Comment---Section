import { useState } from "react";
import data from "./data.json";
import Comments from "./components/Comments";
import CommentBox from "./components/CommentBox";
import DeleteModal from "./components/DeleteModal";

function App() {
  const commentsData = data;

  // Add Comments
  let [userDetails, setUserDetails] = useState(commentsData.comments);

  function addComment(newComment) {
    let id = Math.floor(Math.random() * 1000) + 1;
    const upDatedComment = { ...newComment, id };
    setUserDetails((prevComment) => [...prevComment, upDatedComment]);
    // console.log([...userDetails, upDatedComment]);
  };

  // Delete Comment
  function deleteComment (id){
  //  setUserDetails( userDetails.filter(comment => comment.id != id))
    console.log('Deleted comment with id:', id);

  }

// CurrentUser Data
  const currentUser = commentsData.currentUser;


  // Show Reply Box
  const [showReply, setShowReply] = useState(false);

  function handleShowReply(e) {
    setShowReply((prevShow) => !prevShow);
    // console.log(e);
  }

  return (
    <div className="App relative bg-VeryLightGray font-Rubik w-full h-full flex flex-col items-center p-8">
      <Comments
        commentData={userDetails}
        currentUser={currentUser}
        commentState={commentsData}
        showReply={showReply}
        handleShowReply={handleShowReply}
        deleteComment={deleteComment}
      />
      {/* <DeleteModal /> */}

      <CommentBox commentState={commentsData} addComment={addComment} />
    </div>
  );
}

export default App;
