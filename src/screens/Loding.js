import React  from "react";

function Loading(){
    return(
    <div class="spinner-border  " role="status" style={{height:"80px", width:"80px",display:"flex",justifyContent:"center"}}>
  <span class="sr-only">Loading...</span>
</div>
    )
}
export  default Loading;