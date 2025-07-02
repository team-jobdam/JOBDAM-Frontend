import React, { useState } from "react";
import { Category } from "@/components";

export function CounselAccount() {
  // 카테고리와 콘텐츠 상태를 분리
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  return (
    <>
    <div id="container" className="w-[100vw] h-[100vh] bg-white flex flex-col items-center">
      
      {/* 카테고리 리스트 */}
      <div id="categoryContainer" className="w-[46%] h-auto mt-16 flex flex-col ">
        <p id="categoryTitle" className="text-black text-[1.6rem] font-[700] font-pretendard">상담 종류 선택을 도와드릴게요.</p>
        <p id="categoryDescription" className="text-black text-[1rem] font-[400] font-pretendard">주제와 관련된 카테고리를 설정해주세요.</p>

        <div id="categoryList" className="flex flex-row gap-[0.7vw] mt-[3vh]">
        <Category value="온라인" selected={selectedCategory === "온라인"} onClick={() => setSelectedCategory("온라인")} />
        <Category value="오프라인" selected={selectedCategory === "오프라인"} onClick={() => setSelectedCategory("오프라인")} />
        </div>
      </div>

      {/* 콘텐츠 리스트 */}
      <div id="contentContainer" className="w-[46%] h-auto mt-[5vh]">
        <p id="categoryTitle" className="text-black text-[1.6rem] font-[700] font-pretendard">
          {selectedCategory === "온라인" ? "비대면 상담 주제 입력을 도와드릴게요." : selectedCategory === "오프라인" ? "대면 상담 주제 입력을 도와드릴게요." : "상담 주제 입력을 도와드릴게요."}
        </p>
        <p id="categoryDescription" className="text-black text-[1rem] font-[400] font-pretendard">주제와 관련된 카테고리를 설정해주세요.</p>
        
        <div id="contentList" className="flex flex-row gap-[0.7vw] mt-[3vh]">
          <Category value="취업" selected={selectedContent === "취업"} onClick={() => setSelectedContent("취업")} />
          <Category value="진로" selected={selectedContent === "진로"} onClick={() => setSelectedContent("진로")} />
          <Category value="면접" selected={selectedContent === "면접"} onClick={() => setSelectedContent("면접")} />
          <Category value="인턴/실무 활동" selected={selectedContent === "인턴/실무 활동"} onClick={() => setSelectedContent("인턴/실무 활동")} />
          <Category value="기타" selected={selectedContent === "기타"} onClick={() => setSelectedContent("기타")} />
        </div>

        <p id="inputTitle" className="text-black text-[1rem] font-400 font-pretendard mt-[3vh]">자세한 상담 주제를 입력해 주세요.</p>
        <input id="subtitleInput" placeholder="주제를 입력하세요" type="text" className="w-[27vw] h-[5vh] border text-black font-pretendard border-black rounded-[5px] mt-[1vh] pl-4 " />
      </div>

      {/* 제출&취소 버튼 */}
      <div id="buttonContainer" className="w-[46vw] flex flex-row gap-[0.7vw] mt-[3vh] justify-end">
        <button id="cancleButton">취소</button>
        <button id="confirmButton">확인</button>
      </div>
    </div>
    </>
  )
}