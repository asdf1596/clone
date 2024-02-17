import { Navbar, NavbarLarge } from "./navbar";
import React from "react";

export default function Home() {
    return (
        <div className="bg-[#EAEAEB] w-full">
            <Navbar />
            <main className="flex flex-row">
                <NavbarLarge />
                <div>asdf</div>
            </main>
            <div>zxcv</div>
        </div>
    );
}
