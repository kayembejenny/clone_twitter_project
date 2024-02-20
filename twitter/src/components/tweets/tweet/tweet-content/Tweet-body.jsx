import TweetTitleAuthors from "./tweet-title/Tweet-title-author"
import TweetText from "./tweet-body/Tweet-text"
import TweetImage from "./tweet-body/Tweet-image"
export default function TweetBody(){
    return(
        <div className="tweet-body">
            <TweetTitleAuthors/>
            <TweetText/>
            <TweetImage/>
        </div>
    )

}