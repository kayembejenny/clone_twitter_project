import Navigation from "./sidebar/Navigation"
export default function Siderbar(){
    return(
      <div style={
        {
          position:"fixed",
          top:0,
          left:0,
          height:'100vh',
          padding :' 1% 1%'
        }
      }>
        <Navigation/>
        
      </div>
    )
}