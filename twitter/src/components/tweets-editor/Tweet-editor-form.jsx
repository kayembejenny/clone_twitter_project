import TweetEditorInput from "./Tweet-editor-input"
import TweetEditorButtons from "./Tweet-editor-buttons"
export default function TweetEditorForm(){
    return(
        <div className="tweet-editor-form">
        <TweetEditorInput/>
        <TweetEditorButtons/>
        </div>
      
    )
   
}