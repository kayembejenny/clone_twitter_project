import Menu from "./navigation/Menu"
import { navigation } from "../.."

export default function Navigation(){
    return (
        <div  style={
          {
          display : "flex",
          flexDirection : "column",
           gap:'2.5vh'
          }
        }> 
            {navigation.map((el,index)=><Menu key={index} data ={el}/> )}
        </div>
    )
}