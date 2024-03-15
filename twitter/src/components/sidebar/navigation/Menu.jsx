export default function Menu({data}){
    return(
        <div style={
            {
                display:'flex',
                alignItems:'center',
                gap:'20px'
            }
        }>
            <span><img src={data.logo1} alt="" style={{width:"30px"}} /></span>
            <h4>{data.text}</h4>
        </div>
    )

}