import Tweet from "./tweets/Tweet";
import photo1 from "../assets/Tweet-Profile-Photo2.png"
import photo2 from "../assets/Tweet-Profile-Photo.png"
import photo3 from "../assets/Tweet-Profile-Photo3.png"
import imagetweet from "../assets/image 3.png"
export default function Tweets(){
    const twit = [
        {
            user :{
                name :"CNN",
                time : "7m",
                image : photo1,
                username : "@CNN"
            },
             content:{
                text :"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
             },
            action :{
                commentaire : "57",
                like : "144",
                retweet :"184",
                share :""
            }
            
        },

        {
            user :{
                name :"The New York Times",
                time : "2h",
                image : photo2,
                username : "@nytimes"
            },
            content :{
                text :"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
                image : imagetweet,
            },
            action :{
                commentaire : "19",
                like : "48",
                retweet :"482",
                share :""
            }
            
        },
        {
            user :{
                name :"Twitter",
                time : "Oct 29",
                image : photo3,
                username : "@Twitter"
            },
            content :{
                text :"BIG NEWS lol jk still Twitter",
            },
               
            action :{
                commentaire : "6.8K",
                like : "36.6K",
                retweet :"267.1K",
                share :""
                 }
        },
        {
            user :{
                name :"Twiiter",
                time : "Oct 4",
                image : photo3,
                username : "@Twitter"
            },
            content :{
                text :"hello literally everyone",
               
            },
            action :{
                commentaire : "118.7K",
                like : "785.7K",
                retweet :"3.3M",
                share :""
            }
        },
        {
            user :{
                name :"Twiiter",
                time : "Oct 4",
                image : photo3,
                username : "@Twitter"
            },
            content :{
                text :"hello literally everyone",
               
            
            },
        action :{
            commentaire : "118.7K",
            like : "785.7K",
            retweet :"3.3M",
            share :""
        }
    },

    {
        user :{
            name :"Twiiter",
            time : "Oct 4",
            image : photo3,
            username : "@Twitter"
        },
        content :{
            text :"hello literally everyone",
            image : imagetweet,
        },
    action :{
        commentaire : "118.7K",
        like : "785.7K",
        retweet :"3.3M",
        share :""
        }
    }
    

        
    ]
  
   
    return(
        <div className="tweets">
     { twit.map((e,i)=><Tweet key={i} props={e}/>)}
        </div>
    )
}