import { ChevronLeft } from "lucide-react";
import React from "react";

export const Top: React.FC = () => {
    return (
        <header className="h-[370px] w-full flex flex-row gap-[50px] ml-[250px] mt-[-40px]">
            <ChevronLeft className="mt-[185px] " />
            <div className="flex flex-row mt-[70px]">
                <img
                    src="/maople.jpg"
                    alt="maple Image"
                    className="w-[500px] h-[240px]"
                />
                <div className="h-[240px] w-[400px] bg-white flex flex-col">
                    <div>
                        <img
                            src="/sunny.png"
                            alt="Sunny Image"
                            className="w-[50px] h-[50px] rounded-full mt-[15px] ml-[15px]"
                        />
                        <div className="ml-[15px]">
                            <div>메이플 전문 서터리머</div>
                            <div className="text-gray-400">maple story</div>
                            <div className="text-gray-400">3K viewesrs</div>
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
                    <div className=" text-xs mt-[20px] ml-[5px]">
                        위 게임은 망겜으로서 진짜 시작하지도 마세요 원래는 여기
                        스트리머 정보 적는 공간이기는 한데 그냥 생각나는거
                        하고싶어서 얘기합니다 절대 메이플 시작하지 마세요 아무튼
                        여기즈음 적으면 한 3줄 다 채울듯
                    </div>
                </div>
            </div>
            <ChevronLeft className="rotate-180 mt-[185px] " />
        </header>
    );
};
