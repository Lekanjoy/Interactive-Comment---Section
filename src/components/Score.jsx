import { useState, useEffect } from "react";
import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";

function Score({ comment }) {
  let [count, setCount] = useState(comment.score);

  function addCount() {
    setCount((prevCount) => {
      if (prevCount === comment.score) {
        return prevCount + 1;
      } else {
        return comment.score;
      }
    });
    // console.log('added');
  }

  function minusCount() {
    setCount((prevCount) => {
      if (prevCount === comment.score && prevCount > 0) {
        return prevCount - 1;
      } else {
        return comment.score;
      }
    });
    // console.log('minus');
  }

  return (
    <div className=" flex items-center px-2 py-4 gap-x-3 w-auto h-4  cursor-pointer rounded-md text-center select-none  font-semibold bg-LightGray  md:flex-col md:h-auto md:w-9 md:justify-between">
      <img src={iconPlus} alt="increment icon" onClick={addCount} />
      <p className="text-ModerateBlue text-base font-bold">{count}</p>
      <img src={iconMinus} alt="decrement icon" onClick={minusCount} />
    </div>
  );
}

export default Score;
