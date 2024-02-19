import PageTitle from "./header/Page-title";
import TopTweets from "./header/Top-tweets";
export default function Header(){
    return (
        <div className="header">
          <PageTitle/>
          <TopTweets/>
        </div>
    )
}