import Header from "./Header";
import TweetEditor from "./Tweet-editor";


import Tweets from "./Tweets";
import Siderbar from "./Sidebar";
export default function TimeLine(){
    return(
        <>
            <div>
                <Siderbar/>
            </div>
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