import {useDebugValue, useState} from 'react'


function CommentBox({ addComment, setShowReply, commentState }) {
  const [content, setReply] = useState("@");

  function handleReply(e) {
    setReply(`${e.target.value}`);
  }

  // Add/Submit Comment
  function handleSubmit(e) {
    e.preventDefault();
    addComment({
       content ,
       id:454,
       score: 0,
       replies:[],
       createdAt: 'Just Now'
       
      });
    setReply("");
    setShowReply(false);
  }

  let user = commentState.currentUser;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between gap-x-4 my-2  p-4 bg-White w-full rounded-lg "
    >
      <img src={user.image.png} alt="user" className="w-8 h-8" />
      <textarea
        cols="20"
        rows="2"
        value={content}
        onChange={handleReply}
        className="border border-LightGrayishBlue text-DarkBlue font-medium px-2 pb-3 rounded-lg resize-none flex-1 outline-none"
      ></textarea>
      <div>
        <input
          type="submit"
          value="REPLY"
          className="bg-ModerateBlue px-4 py-1 text-center rounded-md text-White"
        />
      </div>
    </form>
  );
}

export default CommentBox