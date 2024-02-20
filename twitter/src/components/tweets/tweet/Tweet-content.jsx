import TweetBody from "./tweet-content/Tweet-body";
import TweetAction from "./tweet-content/tweet-actions/Tweet-action";
export default function TweetContent(){
    return( 
        <div className="tweet-content">
            <TweetBody/>
            <TweetAction/>
        </div>

    )
}