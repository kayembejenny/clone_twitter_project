import Header from "./Header";
import TweetEditor from "./Tweet-editor";


import Tweets from "./Tweets";
import Siderbar from "./Sidebar";
import Trend from "./Trend";
export default function TimeLine(){
    return(
        <>
            <div className="sidebar"> 
                <Siderbar/>
            </div>
            <div className="timeline ">
            <Header/>
            <TweetEditor/>
            <Tweets/>
            {/* <Tweets/> */}
            </div>
            <div className="trend"> 
                <Trend/>
            </div>
        </>

    )
}