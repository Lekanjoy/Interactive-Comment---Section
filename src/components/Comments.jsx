import React, { useState } from "react";
import Score from "./Score";
import reply from "../images/icon-reply.svg";
import CommentBox from "./CommentBox";
import SubComment from './SubComments'

function Comments({ commentData, commentState, addComment }) {
  const mappedComments = commentData.map((comment) => {
    // Show Reply Box
    const [showReply, setShowReply] = useState(false);
    function handleShowReply() {
      setShowReply((prevShow) => !prevShow);
    }

    return (
      <section key={comment.id} className="mb-4">
        <div className="bg-White w-full p-4 mb-4 rounded-lg lg:w-9/12 ">
          <div className="title flex justify-between gap-x-3 items-center w-4/5 mb-4 flex-nowrap">
            <img
              src={comment.user.image.webp}
              alt="Icon amyrobson"
              className="w-8 h-8"
            />
            <p className="text-DarkBlue font-semibold ">
              {comment.user.username}
            </p>
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
            <div
              className="reply flex items-center gap-x-2 cursor-pointer"
              onClick={handleShowReply}
            >
              <img src={reply} className="w-3 h-3" />{" "}
              <span className="text-ModerateBlue font-bold text-sm">Reply</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          {showReply && (
            <CommentBox
              addComment={addComment}
              setShowReply={setShowReply}
              commentState={commentState}
            />
          )}
        </div>

        <div className="replies flex flex-col items-end relative">
          <SubComment comment={comment} commentState={commentState} />
        </div>
      </section>
    );
  });

  return <>{mappedComments}</>;
}

export default Comments;
