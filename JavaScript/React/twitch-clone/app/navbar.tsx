// Navbar.tsx

import { ArrowDownToLine } from "lucide-react";
import { MoreVertical } from "lucide-react";
import { Search } from "lucide-react";
import { Inbox } from "lucide-react";
import { User } from "lucide-react";
import React from "react";

const data: string[] = ["twtich", "hagiga", "gichanayo", "gooraedo", "haeyaji"];
export const Navbar: React.FC = () => {
    return (
        <header>
            <div className="fixed top-0 left-0 p-4 w-full h-[68px] bg-white">
                <div className="w-[199px] h-[40px] flex flex-row gap-[500px]">
                    <div className="flex flex-row gap-[24px]">
                        <img
                            src="/logo_twitch.png"
                            alt="twitch Image"
                            className="w-[40px] h-[40px]"
                        />
                        <div className="mt-[4px]">Browse</div>
                        <MoreVertical className="w-[60px] h-[60px] mt-[-12px]" />
                    </div>
                    <div className="flex flex-row gap-[12px]">
                        <div className="w-[413px] h-[44px] bg-[#E5E5E5] border border-black rounded-md p-[10px]">
                            Search
                        </div>
                        <div className="w-[44px] h-[44px] bg-[#F2F2F2] ml-[1px] border rounded-md">
                            <Search className="w-[24px] h-[24px] mt-[10px] ml-[10px]" />
                        </div>
                    </div>
                    <div className="flex flex-row w-[248px] h-[35px] gap-[12px]">
                        <Inbox className="w-[32px] h-[32px]" />
                        <div className="w-[71px] h-[35px] bg-[#F2F2F2] border rounded-md pl-[12px] pt-[4px]">
                            Log In
                        </div>
                        <div className="w-[85px] h-[35px] bg-[#9147FF] border rounded-md pl-[12px] pt-[4px] text-white">
                            Sign Up
                        </div>
                        <User className="w-[24px] h-[24px] ml-[-5px] mt-[5px]" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export const NavbarLarge: React.FC = () => {
    return (
        <header className="fixed left-0 ">
            <nav className="bg-[#EFEFF1] w-[305px] h-[1417px] p-[24px]">
                <div className="w-[350px] h-[24px] flex flex-row gap-[45px]">
                    RECOMMENDS CHANNELS
                    <ArrowDownToLine className="rotate-90" />
                </div>
                <div className="mt-[32px]">
                    {data.map((item, index) => (
                        <div key={index} className="mb-[15px]">
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
