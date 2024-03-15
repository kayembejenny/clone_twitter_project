import reglage from '/icones/Options.svg'
export default function TrendTitle(){
    return(
        <div style={{display:'flex', justifyContent:'space-between'}} >
            <p>Trends for you </p>
            <img src={ reglage }alt="" />
        </div>
    )
}