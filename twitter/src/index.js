import logotweet from '/icones/Twitter.svg'
import homeafter from '/icones/Home.svg'
import homebefore from '/icones/Home-Fill.svg'
import explorebefore from '/icones/Explore.svg'
import exploreafter from '/public/icones/Fill.svg'
import notificationafter from '/icones/Notifications.svg'
import notificationbefore from '/icones/Notifications-Fill.svg'
import messageafter from '/icones/Messages.svg'
import messagebefore from '/icones/Messages-Fill.svg'
import bookafter from '/icones/Bookmarks.svg'
import bookbefore from '/icones/Bookmarks-Fill.svg'
import listafter from '/icones/Lists.svg'
import listbefore from '/icones/Lists-Fill.svg'
import profilafter from '/icones/Profile.svg'
import profilbefore from '/icones/Profile-Fill.svg'
import moreafter from '/icones/More.svg'
import photo1 from "/src/assets/Tweet-Profile-Photo2.png"
import photo2 from "/src/assets/Tweet-Profile-Photo.png"
import photo3 from "/src/assets/Tweet-Profile-Photo3.png"
import imagetweet from "/src/assets/image 3.png"


export const navigation =
[
   {logo1 :logotweet },

   {logo1 : homeafter,
    logo2 : homebefore,
    text : 'Home'
   },
   {
    logo1 : exploreafter,
    logo2 : explorebefore,
    text : 'Explore'
   },
   {
    logo1 : notificationafter,
    logo2 : notificationbefore,
    text : 'Notification'
   },
   {
    logo1 : messageafter,
    logo2 : messagebefore,
    text : 'Message'
   },
   {
    logo1 : bookafter,
    logo2 : bookbefore,
    text : "Bookmater"
   },
   {
    logo1 : listafter,
    logo2 : listbefore,
    text : "Lists"
   },
   {
   logo1 : profilafter,
   logo2 : profilbefore,
   text : "Profile"
  },
  {
    logo1 : moreafter,
    logo2 : "",
    text : "More"
   }
]

export const thetrend = [  1,2,3,4 ]
export const twit = [
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