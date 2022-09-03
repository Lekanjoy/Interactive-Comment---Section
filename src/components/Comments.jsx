import React, { useState } from "react";
import Score from "./Score";
import replyIcon from "../images/icon-reply.svg";
import editIcon from "../images/icon-edit.svg";
import deleteIcon from "../images/icon-delete.svg";
import ReplyBox from "./ReplyBox";
import SubComment from "./SubComments";
// import DeleteModal from "./DeleteModal";

function Comments({
  commentData,
  commentState,
  currentUser,
  handleShowReply,
  deleteComment,
  replyData,
}) {
  // Show Modal OnClick Delete Button
  const [showModal, setShowModal] = useState(false);
  function handleShowModal() {
    setShowModal((prevState) => !prevState);
  };


  const mappedComments = commentData.map((comment) => {

    function handleDelete() {
      deleteComment(comment.id);
    }

    return (
      <section key={comment.id} className="mb-4 min-w-full">
        <div className="bg-White  p-4 mb-4 rounded-lg lg:w-9/12 ">
          <div className="title flex justify-between gap-x-3 items-center w-4/5 mb-4 flex-nowrap">
            <img
              src={comment.user.image.webp}
              alt="Icon amyrobson"
              className="w-8 h-8"
            />
            {}
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
                onClick={handleShowReply}
              >
                <img src={deleteIcon} className="w-3 h-3" />{" "}
                <span className="text-SoftRed" onClick={handleShowModal}>
                  Delete
                </span>
                <img src={editIcon} className="w-3 h-3" />
                <span className="text-ModerateBlue">Edit</span>
              </div>
            ) : (
              <div
                className="reply flex items-center gap-x-2 cursor-pointer"
                onClick={handleShowReply}
              >
                <img src={replyIcon} className="w-3 h-3" />
                <span className="text-ModerateBlue font-bold text-sm">
                  Reply
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          {/* {<ReplyBox commentState={commentState} comment={comment} />} */}
        </div>

        <div className="replies flex flex-col items-end relative">
          <SubComment
            replyData={replyData}
            comment={comment}
            commentState={commentState}
          />
        </div>
        {/* {showModal && (
          <DeleteModal
            comment={comment}
            deleteComment={deleteComment} handleDelete={handleDelete}
          />
        )} */}

      { showModal && <div className=" fixed z-30 flex justify-center items-center w-full h-screen p-4">
          <div className="bg-White shadow-2xl  h-auto flex flex-col p-4 rounded-md">
            <h1 className="text-lg  text-DarkBlue mb-4 font-bold">
              Delete comment
            </h1>
            <p className="text-base text-GrayishBlue mb-3 ">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <div className="flex justify-between w-full ">
              <button className="p-3 text-White bg-GrayishBlue rounded-md">
                NO, CANCEL
              </button>
              <button
                className="p-3 text-White bg-SoftRed rounded-md"
                onClick={handleDelete}
              >
                YES, DELETE
              </button>
            </div>
          </div>
        </div>}
      </section>
    );
  });

  return <>{mappedComments}</>;
}

export default Comments;
