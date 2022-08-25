import React, {useState} from "react";
import Score from "./Score";
import CommentBox from "./CommentBox";
import amy from "../images/avatars/image-amyrobson.png";
import reply from "../images/icon-reply.svg";


function SubComments({ comment}) {
  return (
    <>
      {comment.replies.map((reply) => {
        // Show Reply Box
        const [showReply, setShowReply] = useState(false);
        function handleShowReply() {
          setShowReply((prevShow) => !prevShow);
        }

        return (
          <section key={reply.id} className="mb-4 w-11/12">
            <div className="bg-White  p-4 rounded-lg  lg:w-9/12 ">
              <div className="title flex justify-between gap-x-3 items-center w-4/5 mb-4 flex-nowrap">
                <img src={amy} alt="Icon amyrobson" className="w-8 h-8" />
                <p className="text-DarkBlue font-semibold ">
                  {reply.user.username}
                </p>
                <p className="text-GrayishBlue font-light whitespace-nowrap flex-1">
                  {reply.createdAt}
                </p>
              </div>
              <div className="details mb-4">
                <p className="text-GrayishBlue font-medium text-sm">
                  {reply.content}
                </p>
              </div>
              <div className="flex justify-between w-full">
                <Score comment={comment} />
                <div
                  className="reply flex items-center gap-x-2 cursor-pointer"
                  onClick={handleShowReply}
                >
                  <img src={reply} className="w-3 h-3" />
                  <span className="text-ModerateBlue font-bold text-sm">
                    Reply
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full">{showReply && <CommentBox />}</div>
          </section>
        );
      })}
      
    </>
  );
}

export default SubComments;
