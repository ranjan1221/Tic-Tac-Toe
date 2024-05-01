import React from "react";
function Squares({value,onClick}){
    return(
        <>
        <div onClick={onClick}
        style={{border:"1px solid black" ,height:"100px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}} className="squares">

            <h3>{value}</h3>
        </div>
        
        
        </>
    )
}

export default Squares