import { useState } from "react";

function CommentBox({
  addComment,
  setShowReply,
  commentState,
  content,
  setContent,
  handleComment,
  updateText,
  setUpdateText,
}) {
  let user = commentState.currentUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 5) {
      alert("Comment must contain more than 5 characters");
      return;
    }

    addComment({
      content,
      score: 0,
      replies: [],
      createdAt: "Just now",
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: user.username,
      },
    });

    setContent("");
    setUpdateText("SEND");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between flex-col gap-y-4 my-2 p-4 bg-White w-full rounded-lg md:flex-row md:gap-x-5"
    >
      <img
        src={user.image.png}
        alt="user icon"
        className="w-8 h-8 hidden md:block"
      />

      <textarea
        id="textBox"
        cols="20"
        rows="3"
        placeholder="Add a Comment"
        value={content}
        onChange={handleComment}
        className="border border-LightGrayishBlue text-DarkBlue font-medium px-2 pb-3 rounded-lg resize-none flex-1 outline-none"
      ></textarea>
      <div className="flex justify-between">
        <img
          src={user.image.png}
          alt="user icon"
          className="w-8 h-8 md:hidden"
        />

        <input
          id="submit"
          type="submit"
          value={updateText}
          className="bg-ModerateBlue px-4 py-1 text-center rounded-md text-White cursor-pointer hover:opacity-50 md:h-fit"
        />
      </div>
    </form>
  );
}

export default CommentBox;
