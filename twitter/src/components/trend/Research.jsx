import search from '/icones/Search.svg'
export default function Research(){
    return (
        <div>
        <div  style={{display:'flex',gap:'8px', 
        backgroundColor:'#202327', borderRadius:'20px', 
        padding:"10px ",
        margin:'10px 2vw'}}> 
            <img src={search} alt="" />
            <input type="text" placeholder='search'
            style={{backgroundColor:'transparent',border:'none',outline:'none', color:'gray'}}/>
        </div>
        </div>
    )
}