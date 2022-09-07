import Comment from "./Comment";

function Comments({
  commentData,
  commentState,
  currentUser,
  handleShowReply,
  deleteComment,
  editComment,
  replyData,
  content,
  setContent
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
          />
        );
      })}
    </>
  );
}

export default Comments;
