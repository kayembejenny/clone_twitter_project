
import TweetText from "./tweet-body/Tweet-text"
import TweetImage from "./tweet-body/Tweet-image"
import TweetTitle from "./tweet-body/Tweet-title"
export default function TweetBody({boxtweet,boxtext}){
    return(
        <div className="tweet-body">
            <TweetTitle titre={boxtweet}/>
            <TweetText lestext={boxtext?.text}/>
           { boxtext.image && <TweetImage lesimages={boxtext?.image}/>}
        </div>
    )

}