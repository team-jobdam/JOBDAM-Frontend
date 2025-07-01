import React, { useState } from "react";
import { Category } from "@/components";

export function CounselAccount() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);//나중에 dto에다가 온라인인지 오프라인할때 재사용하기

  return(
    <>
    <div id="container" className="w-[100vw] h-[100vh] bg-white flex flex-col items-center">
      
      {/* 온오프라인 선택 */}
      <div id="categoryContainer" className="w-[46%] h-auto mt-16 flex flex-col ">
        <p id="categoryTitle" className="text-black text-[1.6rem] font-[700] font-pretendard">상담 종류 선택을 도와드릴게요.</p>
        <p id="categoryDescription" className="text-black text-[1rem] font-[400] font-pretendard">주제와 관련된 카테고리를 설정해주세요.</p>

        <div id="categoryList" className="flex flex-row gap-[2vw]">
        <Category value="온라인" selected={selectedCategory === "온라인"} onClick={() => setSelectedCategory("온라인")} />
        <Category value="오프라인" selected={selectedCategory === "오프라인"} onClick={() => setSelectedCategory("오프라인")} />
        </div>
      </div>

      {/*온라인 or 오프라인 정보 입력*/}
      <div id="contentContainer">
        {selectedCategory === "온라인" && <>
        <p className="text-black text-[1.6rem] font-700 font-pretendard">온라인</p>
        </>}
        {selectedCategory === "오프라인" && <>
        <p className="text-black text-[1.6rem] font-700 font-pretendard">오프라인</p>
        </>}
      </div>

      {/* 제출&취소 버튼 */}
      <div id="buttonContainer"></div>
    </div>
    </>
  )
}