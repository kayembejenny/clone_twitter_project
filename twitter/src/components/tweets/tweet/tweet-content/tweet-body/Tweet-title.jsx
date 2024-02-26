import TweetTitleAuthors from "../tweet-title/Tweet-title-author"
import TweetTitleDetails from "../tweet-title/Tweet-title-details"
export default function TweetTitle({titre}){
    // console.log(value5)
    return(
        <div className="tweet-title">
            <TweetTitleAuthors auteur={titre.name} />
            <TweetTitleDetails nom={titre.username} temps={titre.time}/>
        </div>
    )
   
}