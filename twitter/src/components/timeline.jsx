import Header from "./Header";
import TweetEditor from "./Tweet-editor";

import Tweets from "./Tweets";
export default function TimeLine(){
    return(
        <>
            <div></div>
            <div className="timeline ">
            <Header/>
            <TweetEditor/>
            <Tweets/>
            {/* <Tweets/> */}
            </div>
            <div></div>
        </>

    )
}