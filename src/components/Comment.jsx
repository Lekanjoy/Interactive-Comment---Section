import { useState } from "react";
import Score from "./Score";
import replyIcon from "../images/icon-reply.svg";
import deleteIcon from "../images/icon-delete.svg";
import editIcon from "../images/icon-edit.svg";
import DeleteModal from "./DeleteModal";
import SubComment from "./SubComments";
import ReplyBox from './ReplyBox'

function Comment({
  comment,
  currentUser,
  replyData,
  commentState,
  deleteComment,
  editComment,
  setContent,
}) {
  // Show Modal OnClick Delete Button
  const [showModal, setShowModal] = useState(false);
  function handleShowModal() {
    setShowModal((prevState) => !prevState);
  }

  // Show Reply Box
  const [showReply, setShowReply] = useState(false);
  function handleShowReply(e) {
    setShowReply((prevShow) => !prevShow);
    // console.log(e);
  }

  // Handle Delete Commments
  function handleDelete() {
    deleteComment(comment.id);
    setShowModal(false);
  }

  //   Cancel Delete
  function cancelDelete() {
    setShowModal(false);
  }
  // Handle Edit
  function handleEdit() {
    let box = document.getElementById("textBox");
    box.autofocus = true;
    editComment(comment.id, comment.content);
    setContent(comment.content);
  }

  return (
    <section className="mb-4 min-w-full ">
      <div className="bg-White  p-4 mb-4 rounded-lg ">
        <div className="title flex justify-between gap-x-3 items-center w-4/5 mb-4 flex-nowrap ">
          <img
            src={comment.user.image.webp}
            alt="Icon amyrobson"
            className="w-8 h-8"
          />
          <p className="text-DarkBlue font-semibold ">
            {comment.user.username}
          </p>
          {comment.user.username === currentUser.username ? (
            <span className="px-1 py-[2px] text-White rounded-sm text-center bg-ModerateBlue">
              you
            </span>
          ) : (
            ""
          )}
          <p className="text-GrayishBlue font-light whitespace-nowrap flex-1">
            {comment.createdAt}
          </p>
        </div>
        <div className="details mb-4">
          <p className="text-GrayishBlue font-medium text-sm">
            {comment.content}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <Score comment={comment} />
          {comment.user.username === currentUser.username ? (
            <div
              className="reply flex items-center gap-x-2 cursor-pointer"
              // onClick={handleShowReply}
            >
              <img src={deleteIcon} className="w-3 h-3" />
              <span className="text-SoftRed" onClick={handleShowModal}>
                Delete
              </span>
              <img src={editIcon} className="w-3 h-3" />
              <span className="text-ModerateBlue" onClick={handleEdit}>
                Edit
              </span>
            </div>
          ) : (
            <div
              className="reply flex items-center gap-x-2 cursor-pointer"
              // onClick={handleShowReply}
            >
              <img src={replyIcon} className="w-3 h-3" />
              <span
                className="text-ModerateBlue font-bold text-sm"
                onClick={handleShowReply}
              >
                Reply
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        {showReply && (
          <ReplyBox commentState={commentState} comment={comment} />
        )}
      </div>

      <div className="replies flex flex-col items-end relative">
        <SubComment
          replyData={replyData}
          comment={comment}
          commentState={commentState}
        />
      </div>
      {showModal && (
        <DeleteModal handleDelete={handleDelete} cancelDelete={cancelDelete} />
      )}
    </section>
  );
}

export default Comment;
