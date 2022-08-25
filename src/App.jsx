import { useState} from 'react'
import data from './data.json'
import Comments from './components/Comments'

function App() {

  const [comments, setComments] = useState(data)


  return (
    <div className="App bg-VeryLightGray font-Rubik w-full h-full flex flex-col items-center p-8">
      <Comments commentData={comments}/>
  
    </div>
  )
}

export default App
