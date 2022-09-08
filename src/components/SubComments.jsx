import React, {useState} from "react";
import CommentBox from "./CommentBox";
import ReplyBox from "./ReplyBox";
import replyIcon from '../images/icon-reply.svg'
import ReplyScore from "./ReplyScore";



function SubComments({
  comment,
  commentState,
  currentUser,
}) {


  return (
    <>
      {comment.replies.map((reply) => {
        // Show Reply Box
        const [showReply, setShowReply] = useState(false);

        function handleShowReply() {
          setShowReply((prevShow) => !prevShow);
        }

        return (
          <section key={reply.id} className="mb-4 w-10/12">
            <div className="bg-White  p-4 rounded-lg relative   md:flex md:flex-row-reverse md:gap-x-4 lg:gap-x-0">
              <div className="wrapper">
                <div className="title flex justify-between gap-x-3 items-center w-4/5 mb-4 flex-nowrap">
                  <img
                    src={reply.user.image.webp}
                    alt={reply.user.username}
                    className="w-8 h-8"
                  />
                  <p className="text-DarkBlue font-semibold ">
                    {reply.user.username}
                  </p>
                  {reply.user.username === currentUser.username ? (
                    <span className="px-1 py-[2px] text-White rounded-sm text-center text-sm bg-ModerateBlue">
                      you
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="text-GrayishBlue font-light whitespace-nowrap flex-1">
                    {reply.createdAt}
                  </p>
                </div>
                <div className="details mb-4">
                  <p className="text-GrayishBlue font-medium text-sm">
                    {reply.content}
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full  md:w-[10%]">
                <ReplyScore reply={reply} />
                
                  <div className="reply flex items-center gap-x-2 cursor-pointer md:absolute md:right-4 md:top-6">
                    <img
                      src={replyIcon}
                      alt="reply icon"
                      className="w-3 h-3 "
                    />
                    <span
                      className="text-ModerateBlue font-bold text-sm"
                      onClick={handleShowReply}
                    >
                      Reply
                    </span>
                  </div>
  
              </div>
            </div>
            <div className="w-full">
              {showReply && <ReplyBox commentState={commentState} />}
            </div>
          </section>
        );
      })}
    </>
  );
}

export default SubComments;
