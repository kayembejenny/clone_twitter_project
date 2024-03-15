import Followtitle from "./follow/Followtitle";
import Followlist from "./follow/Followlist";
import { thetrend } from "../..";
import { twit } from "../..";


export default function Follow()
{
    return (
        <div style={{background:'#202327', padding:"10px",margin:'10px',display:'flex',flexDirection:'column',
        gap:'20px',borderRadius:'10px'}}>
            <Followtitle/>
          {thetrend.map((el,index)=><Followlist key={index} props={twit[index]}/>)}  
          <a style={{color:'#1D9BF0'}}>Show more</a>
        </div>
    )
}