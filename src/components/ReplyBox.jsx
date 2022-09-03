import React, {useState} from 'react'

function ReplyBox({ commentState }) {
  let user = commentState.currentUser;
  const [content, setContent] = useState("@");

  function handleReply(e) {
    setContent(`${e.target.value}`);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setContent("");
  };





  return (
    <form
      onSubmit={handleSubmit}
      className="flex  flex-col gap-y-2 my-2 p-4 bg-White w-full rounded-lg "
    >
      <div className="relative">
        <textarea
          onChange={handleReply}
          value={content}
          className="border border-LightGrayishBlue w-full  text-DarkBlue font-medium pl-8 pb-3 rounded-lg resize-none flex-1 outline-none"
        ></textarea>
        <img
          src={user.image.png}
          alt="user"
          className="w-6 h-6 absolute top-1 left-1"
        />
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          value="REPLY"
          className="bg-ModerateBlue px-4 py-1  text-sm text-center rounded-md text-White cursor-pointer"
        />
      </div>
    </form>
  );
}

export default ReplyBox