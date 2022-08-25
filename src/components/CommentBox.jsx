import me from '../images/avatars/image-juliusomo.png'

function CommentBox() {

  return (
    <form className="flex justify-between gap-x-4 my-2  p-6 bg-White w-full rounded-lg ">
      <img src={me} alt="" className='w-8 h-8'/>
      <textarea cols="20" rows="2" className='border border-LightGrayishBlue text-DarkBlue px-2 pb-6 rounded-lg resize-none flex-1 outline-none'></textarea>
      <div ><input type="submit" value="REPLY" className='bg-ModerateBlue px-4 py-1 rounded-md text-White'/></div>

    </form>
  )
}

export default CommentBox