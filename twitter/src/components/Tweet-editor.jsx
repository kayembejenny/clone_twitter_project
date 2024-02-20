import Avatar from "./tweets-editor/Avatar";
import TweetEditorForm from "./tweets-editor/Tweet-editor-form";

export default function TweetEditor(){
    return(
      
      <div className="tweet-editor">
      <Avatar/>
      <TweetEditorForm/>
      </div>
  
    )

}