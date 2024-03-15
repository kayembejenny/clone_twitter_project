import Trendlist from "./trendlist/Trendlist";
import TrendTitle from "./trendlist/Trendtitle";
import { thetrend } from "../..";


export default function Listtrend(){
    return(
        <div style={{background:'#202327', padding:"10px",margin:'10px',display:'flex',flexDirection:'column',
        gap:'20px',borderRadius:'10px'}}>
            <TrendTitle/>
          {thetrend.map((el,index)=><Trendlist key={index}/>)}  
          <a style={{color:'#1D9BF0'}}>Show more</a>
        </div>
    )
}