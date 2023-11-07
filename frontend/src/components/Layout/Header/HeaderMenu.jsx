import React from "react";
import { HeaderMenuData } from "../../../constants/HeaderMenuData";
import { HeaderMenuItem } from "./HeaderMenuItem";

export const HeaderMenu = () => {
    return (
        <>
            {
                HeaderMenuData.map((item, index) => {
                    return (
                        <p class="menu-items" key={index}><HeaderMenuItem item={item} /></p>
                    )
                })
            }
        </>
    )
}