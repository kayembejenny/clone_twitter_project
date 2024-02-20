import TweetAvatar from "./tweet/Tweet-avatar";
import TweetContent from "./tweet/Tweet-content";
export default function Tweet(){
    return(
        <div className="tweet">
            <TweetAvatar/>
            <TweetContent/>
        </div>
    )
}