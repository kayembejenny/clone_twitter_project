import Follow from "./trend/Follow";
import Listtrend from "./trend/Listtrend";
import Research from "./trend/Research";

export default function Trend (){
    return (
        <div style={{
          display :'flex',
          flexDirection : 'column'
        }}>
          <Research/>
          <Listtrend/>
          <Follow/>
        </div>
    )
}