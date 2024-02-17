// Navbar.tsx

import { ArrowDownToLine } from "lucide-react";
import React from "react";

const data: string[] = ["twtich", "hagiga", "gichanayo", "gooraedo", "haeyaji"];
export const Navbar: React.FC = () => {
    return (
        <header>
            <nav className="p-4 w-full h-[68px] border">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-lg">Logo</div>
                </div>
            </nav>
        </header>
    );
};

export const NavbarLarge: React.FC = () => {
    return (
        <header>
            <nav className="bg-[#EFEFF1] w-[305px] h-[1417px] p-[24px]">
                <div className="w-[350px] h-[24px] flex flex-row gap-[45px]">
                    RECOMMENDS CHANNELS
                    <ArrowDownToLine className="rotate-90" />
                </div>
                <div className="mt-[32px]">
                    {data.map((item, index) => (
                        <div className="mb-[15px]">
                            <div
                                key={index}
                                className="w-[337px] h-[42px] flex flex-row"
                            >
                                <img
                                    src="/sunny.png"
                                    alt="Sunny Image"
                                    className="w-[42px] h-[42px] rounded-full"
                                />
                                <div className="h-[42px] ml-[12px] w-[157px]">
                                    <div>{item}</div>
                                    <div className="text-gray-400">
                                        maple story
                                    </div>
                                </div>
                                <div className="flex flex-row mt-[5px]">
                                    <img
                                        src="/asd.png"
                                        alt="asd Image"
                                        className="w-[12px] h-[12px] rounded-full"
                                    />
                                    <div className="mt-[-6px]">2,818</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};
