import React, { useState } from "react";

interface CategoryProps {
    value?: string;
}

export function Category({ value = "카테고리" }: CategoryProps) {
    const [selected, setSelected] = useState(false);

    return (
        <button id="categoryContainer"onClick={() => setSelected(!selected)} type="button"
        className={`w-auto h-[3rem] flex justify-center items-center border-[1px] rounded-[4px] transition-colors duration-200 bg-white ${selected ? 'border-primaryGreen text-primaryGreen' : 'border-black text-black'}`}>
            {value}
        </button>
    );
}

