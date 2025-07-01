// category.tsx
import React from "react";

interface CategoryProps {
  value: string;
  selected?: boolean;
  onClick?: () => void;
}

export function Category({ value, selected = false, onClick }: CategoryProps) {
  return (
    <button className={`px-4 py-2 border rounded-[4px] text-[1rem] font-[400] font-pretendard ${selected ? "text-primary border-primary" : "text-black border-black"}`} onClick={onClick}>
      {value}
    </button>
  );
}