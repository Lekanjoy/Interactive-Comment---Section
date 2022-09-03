import React from "react";

function DeleteModal({ handleDelete, deleteComment }) {
  // console.log(handleDelete);

 

  return (
    <div className=" fixed z-30 flex justify-center items-center w-full h-screen p-4">
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
    </div>
  );
}

export default DeleteModal;
