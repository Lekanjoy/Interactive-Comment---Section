import { useState } from "react";
import iconMinus from '../images/icon-minus.svg'
import iconPlus from "../images/icon-plus.svg";

function Score({comment}) {
  const [count, setCount] = useState(comment.score);

  function addCount(){
    setCount(prevcount => prevcount + 1)
  }

  function minusCount() {
    setCount((prevcount) => prevcount - 1);
  }

  return (
    <div className=" flex  items-center px-2 py-4 gap-x-3 w-auto h-4 cursor-pointer rounded-md text-center select-none  font-semibold bg-LightGray">
      <img src={iconPlus} onClick={addCount} />
      <p className="text-ModerateBlue text-base">{count}</p>
      <img src={iconMinus} onClick={minusCount} /> 
    </div>
  );
}

export default Score;
