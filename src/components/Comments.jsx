import Comment from "./Comment";

function Comments({
  commentData,
  commentState,
  currentUser,
  deleteComment,
  editComment,
  replyData,
  setContent,
  setUpdateText
}) {
  return (
    <>
      {commentData.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            currentUser={currentUser}
            deleteComment={deleteComment}
            commentState={commentState}
            replyData={replyData}
            editComment={editComment}
            setContent={setContent}
            setUpdateText={setUpdateText}
          />
        );
      })}
    </>
  );
}

export default Comments;
