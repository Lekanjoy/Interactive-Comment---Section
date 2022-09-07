
function DeleteModal({ handleDelete, cancelDelete }) {
  return (
    <div className="flex justify-center items-center p-5 fixed w-full h-screen left-0 top-0">
      <div className="bg-White shadow-2xl  h-auto flex flex-col p-4 rounded-md md:w-96">
        <h1 className="text-lg  text-DarkBlue mb-4 font-bold">
          Delete comment
        </h1>
        <p className="text-base text-GrayishBlue mb-3 ">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-between w-full ">
          <button
            className="p-3 text-White bg-GrayishBlue rounded-md"
            onClick={cancelDelete}
          >
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
