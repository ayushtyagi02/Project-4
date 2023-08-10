import React from "react";
import "./Spinner.css"
const Spinner=()=>{
    return (
       <div className="flex flex-col items-center space-y-2 gap-2">
<div className="custom-loader"></div>        
<p>Loading....</p>
       </div>
    )
}

export default Spinner;