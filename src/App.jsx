import { useState} from 'react'
import data from './data.json'
import Comments from './components/Comments'
import CommentBox from './components/CommentBox';

function App() {
  const [comments, setComments] = useState(data);

  let [userDetails, setUserDetails] = useState(comments.comments);

  // Add Comments
  function addComment(newComment) {

    // setUserDetails((prevComment) => [...prevComment, newComment]);
    console.log([...userDetails, newComment]);
    // console.log([newComment]);
  }

  return (
    <div className="App bg-VeryLightGray font-Rubik w-full h-full flex flex-col items-center p-8">
      <Comments
        commentData={userDetails}
        commentState={comments}
        addComment={addComment}
      />
      <CommentBox commentState={comments} />
    </div>
  );
}

export default App
