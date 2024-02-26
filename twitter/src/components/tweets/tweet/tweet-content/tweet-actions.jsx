import TweetAction from "./tweet-actions/Tweet-action"

export default function TweetsActions({lesactions}){
   return (
      <div className="tweet-actions">
           <TweetAction utilisateur={lesactions}/>
      </div>

  
   )
}