import React from "react";
import { BrowserRouter, Routes, Outlet } from "react-router-dom";
import Layout from '../../Layout'
export const BrowserRouterWrapper = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Outlet/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}