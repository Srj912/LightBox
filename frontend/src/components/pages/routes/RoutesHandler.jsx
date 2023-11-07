import React from "react";
import { BrowserRouterWrapper } from "./BrowserRouterWrapper";
import { Route } from "react-router-dom";
import { LightboxPage } from "../public/LightboxPage";
import { AlamyPage } from "../public/AlamyPage";

export const RoutesHandler = () => {
    return (
        <BrowserRouterWrapper>
            <Route path="/" element={<LightboxPage />} />
            <Route path="/Alamy" element={<AlamyPage />} />
        </BrowserRouterWrapper>
    )
}