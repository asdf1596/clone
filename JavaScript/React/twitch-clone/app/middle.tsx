import { ChevronDown } from "lucide-react";
import React from "react";

const data: string[] = ["", "", "", "", ""];
const data2: string[] = ["너가 좋아할 라이브 채널들", "플랫포머 게임"];
export const Middle: React.FC = () => {
    return (
        <header>
            {data2.map((item, index) => (
                <div className="mt-[20px]">
                    <div className="ml-[10px] text-violet-700 mb-[15px]">
                        {item}
                    </div>
                    <div className="flex flex-row ml-[15px]">
                        {data.map((item, index) => (
                            <div className="mr-[15px]">
                                <div className="relative">
                                    <img
                                        src="/tag_live.png"
                                        alt="live Image"
                                        className="w-[40px] h-[20px] absolute m-[5px]"
                                    />
                                    <img
                                        src="/maople.jpg"
                                        alt="maple Image"
                                        className="w-[300px] h-[180px] top-[20px] left-[2px]"
                                    />
                                </div>
                                <div className="flex flex-row">
                                    <div>
                                        <img
                                            src="/sunny.png"
                                            alt="Sunny Image"
                                            className="w-[50px] h-[50px] rounded-full mt-[15px] ml-[15px]"
                                        />
                                    </div>
                                    <div>
                                        <div className="ml-[15px]">
                                            <div>메이플 전문 서터리머</div>
                                            <div className="text-gray-400 text-sm">
                                                maple story
                                            </div>
                                            <div className="text-gray-400 text-sm">
                                                3K viewesrs
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-[10px]">
                                            <div className="w-[72px] h-[25px] bg-gray-200 flex flex-col items-center border rounded-md ml-[10px]">
                                                메이플
                                            </div>
                                            <div className="w-[90px] h-[25px] bg-gray-200 flex flex-col items-center border rounded-md">
                                                언제망하냐
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="flex flex-row">
                            <div className="h-[1px] w-[650px] bg-gray-400 mt-[10px]"></div>

                            <div className="flex flex-row">
                                <div className=" text-violet-700">더 보기</div>
                                <ChevronDown className="text-violet-700" />
                            </div>
                            <div className="h-[1px] w-[650px] bg-gray-400 mt-[10px]"></div>
                        </div>
                    </div>
                </div>
            ))}
        </header>
    );
};
