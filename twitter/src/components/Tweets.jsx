import Tweet from "./tweets/Tweet";

import { twit } from "..";
export default function Tweets(){
 
  
   
    return(
        <div className="tweets">
     { twit.map((e,i)=><Tweet key={i} props={e}/>)}
        </div>
    )
}