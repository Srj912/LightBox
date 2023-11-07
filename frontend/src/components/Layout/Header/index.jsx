import React from "react";
import './index.css'
import { HeaderMenu } from "./HeaderMenu";
import { HeaderTitle } from "./HeaderTitle";
import { CountStatus } from "../../../assets/CountStatus";

const index=()=>{
    return(
        <div class="header">
            <HeaderTitle/>
            <HeaderMenu/>        
        </div>
    )
}

export default index