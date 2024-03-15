import Navigation from "./sidebar/Navigation"
import Buttons from "./sidebar/Buttons"
import Profile from "./sidebar/Proflle"
export default function Siderbar(){
    return(
      <div >
      <div style={
        {
          position:"fixed",
          top:0,
          left:0,
          height:'100vh',
          padding :' 5vh 3vw',
          // width : '25%'
        
        }
      }>
        <Navigation/>
        <Buttons/>
        <Profile/>
      </div>
      </div>
    )
}