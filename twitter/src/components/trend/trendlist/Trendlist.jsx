import more from '/icones/More-2.svg'
export default function Trendlist (){
    return (
        <div >
            <p style={{fontSize:'14px', color:'gray',display:'flex', justifyContent:'space-between'}}>Trending in Turkey <img src={more} alt="" /></p>
            <p style={{fontSize:'18px'}}>#SQUID</p>
            <p style={{fontSize:'14px', color:'gray'}}>2.006 Tweets</p>
        </div>
    )
}