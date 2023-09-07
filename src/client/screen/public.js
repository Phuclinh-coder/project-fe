import React from "react";
import { Outlet } from "react-router-dom";
const Public = () => {
    return(
        <div>
            <Outlet/> 
        </div>
    )
}

// hiện thị con của public nếu không phải con của public thì ko hiển thị
export default Public