export default function Menu({data}){
    return(
        <div style={
            {
                display:'flex',
                alignItems:'center',
                gap:'20px'
            }
        }>
            <span>{data.logo1}</span>
            <h4>{data.text}</h4>
        </div>
    )

}