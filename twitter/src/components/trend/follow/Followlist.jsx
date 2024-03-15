import verified from '/icones/Verified.svg'
export default function Followlist ({props}){
    return (
        <div style={{
            display:'flex', justifyContent:'space-between',fontSize:'20px'
        }}>
            <div style={{display:'flex',gap:'10px'}}>
                <img src={props.user.image} alt="" />
                <div >
                    <p style={{fontSize:'18px'}}> {props.user.name} <img src={verified} alt="" /></p>
                    <p style={{fontSize:'14px', color:'gray'}}>{props.user.username}</p>
                </div>
            </div>
                <button style={{borderRadius:'20px',height:'30px',width:'80px',fontSize:'13px'}}>Follow</button>
            
        </div>
    )
}