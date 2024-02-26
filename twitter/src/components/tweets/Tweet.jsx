import TweetAvatar from "./tweet/Tweet-avatar";
import TweetContent from "./tweet/Tweet-content";

export default function Tweet({props}){
    // console.log(props)
    return(
        <div className="tweet">

            <TweetAvatar avatar={props.user.image}/>
            <TweetContent contenu={props}/>
        </div>
    )
}