import Header from "./Header";
import TweetEditor from "./Tweet-editor";

import Tweets from "./Tweets";
export default function TimeLine(){
    return(
       <div className="timeline ">
        <Header/>
        <TweetEditor/>
        <Tweets/>
        {/* <Tweets/> */}
        </div>
    )
}