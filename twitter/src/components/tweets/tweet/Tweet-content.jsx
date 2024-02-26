import TweetBody from "./tweet-content/Tweet-body";
import TweetActions from "./tweet-content/tweet-actions";
export default function TweetContent({contenu}){
    console.log(contenu)
    return( 
        <div className="tweet-content">
            <TweetBody boxtweet={contenu.user} boxtext={contenu.content}/>
            <TweetActions lesactions={contenu.action}/>
        </div>

    )
}