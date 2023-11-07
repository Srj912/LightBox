import React from "react";

export const HeaderMenuItem = ({ item }) => {
    return (
        <>
            <i className={item.icon} />
            {item.title}
        </>
    )
}