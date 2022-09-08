import { useState } from "react";
import replyIcon from "../images/icon-reply.svg";
import deleteIcon from "../images/icon-delete.svg";
import editIcon from "../images/icon-edit.svg";
import DeleteModal from "./DeleteModal";
import SubComment from "./SubComments";
import ReplyBox from "./ReplyBox";
import Score from "./Score";

function Comment({
  comment,
  currentUser,
  replyData,
  commentState,
  deleteComment,
  editComment,
  setContent,
  setUpdateText,
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
    editComment(comment.id, comment.content);
    setContent(comment.content);
    setUpdateText("UPDATE");
  }

  return (
    <section className="mb-4 min-w-full ">
      <div className="bg-White  p-4 mb-4 rounded-lg relative w-full md:flex md:flex-row-reverse md:gap-x-2 lg:gap-x-0">
        <div className="wrapper md:w-[95%]">
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
              <span className="px-1 py-[2px] text-White text-sm rounded-sm text-center bg-ModerateBlue">
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
        </div>
        <div className="flex justify-between w-full md:w-[5%]">
          <Score comment={comment} />
          {comment.user.username === currentUser.username ? (
            <div className="reply flex items-center gap-x-2 cursor-pointer  md:absolute md:right-4 md:top-6">
              <div className="flex items-center gap-x-1 hover:opacity-60">
                <img src={deleteIcon} alt="delete icon" className="w-3 h-3" />
                <span
                  className="text-SoftRed hover:opacity-40"
                  onClick={handleShowModal}
                >
                  Delete
                </span>
              </div>
              <div className=" flex items-center gap-x-1 hover:opacity-60">
                <img src={editIcon} alt="edit icon" className="w-3 h-3" />
                <span
                  className="text-ModerateBlue hover:opacity-40"
                  onClick={handleEdit}
                >
                  Edit
                </span>
              </div>
            </div>
          ) : (
            <div className="reply flex items-center gap-x-2 cursor-pointer md:absolute hover:opacity-40  md:right-4 md:top-6">
              <img src={replyIcon} alt="reply icon" className="w-3 h-3  " />
              <span
                className="text-ModerateBlue font-bold text-sm "
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
          currentUser={currentUser}
        />
      </div>
      {showModal && (
        <DeleteModal handleDelete={handleDelete} cancelDelete={cancelDelete} />
      )}
    </section>
  );
}

export default Comment;
