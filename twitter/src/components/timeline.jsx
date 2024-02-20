import Header from "./Header";
import TweetEditor from "./Tweet-editor";
import Tweet from "./tweets/Tweet";
// import Tweets from "./Tweets";
export default function TimeLine(){
    return(
       <div className="timeline ">
        <Header/>
        <TweetEditor/>
        <Tweet/>
        {/* <Tweets/> */}
        </div>
    )
}