import React from "react";
import { FlipWords } from "./flip-words";

export function FlipWordsDemo(props) {
    const words = ["RituHandmade Arts"];
  
    return (
      <div className="flex justify-start items-center ">
        <div className={` text-[#c19434] dark:text-[#c19434] ${props.classes}`}>
          <FlipWords words={props.words} />
        </div>
      </div>
    );
  }