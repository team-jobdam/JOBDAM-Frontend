import React, { useState } from "react";

type CategoryProps = {
  selected: "online" | "offline";
  onSelect: (category: "online" | "offline") => void;
};

export function Category({ selected, onSelect }: CategoryProps) {
  return (
    <div className="flex gap-2">
      <button
        className={`w-auto h-[3rem] px-4 flex justify-center items-center border-[1px] rounded-[4px] transition-colors duration-200 ${selected === "online" ? 'border-primary text-primary bg-blue-50' : 'border-black text-black bg-white'}`}
        onClick={() => onSelect("online")}
        type="button"
      >
        온라인
      </button>
      <button
        className={`w-auto h-[3rem] px-4 flex justify-center items-center border-[1px] rounded-[4px] transition-colors duration-200 ${selected === "offline" ? 'border-primary text-primary bg-blue-50' : 'border-black text-black bg-white'}`}
        onClick={() => onSelect("offline")}
        type="button"
      >
        오프라인
      </button>
    </div>
  );
}

