import photoprofile from '/src/assets/Profile-Photo.png'
import more from '/icones/More-2.svg'
import Private from '/icones/Private.svg'
export default function Profile(){
    return(
        <div style={{display:"flex", position:"absolute", width:'90%', justifyContent:'space-between'}}> 
           
           <div style={{display:'flex', gap:'8px'}}>
           <img src={photoprofile}alt="" /> 
            <div>
            <p style={{display:'flex', justifyContent:"center",fontSize:"16px"}}>Bradley Ortiz <img src={Private} alt="" /></p>
            <p style={{color:'gray',fontSize:"16px"}}>@Bradley</p>
           </div>
           </div>
          <img src={more} alt="" />
        </div>
    )
}