import { Ca } from "./ca";
import { Middle } from "./middle";
import { Navbar, NavbarLarge } from "./navbar";
import { Top } from "./top";
import React from "react";

export default function Home() {
    return (
        <div className="bg-[#EAEAEB] w-full">
            <Navbar />
            <main className="flex mt-[68px] ml-[305px] flex-col">
                <NavbarLarge />
                <Top />
                <Middle />
            </main>
            <div>zxcv</div>
        </div>
    );
}
