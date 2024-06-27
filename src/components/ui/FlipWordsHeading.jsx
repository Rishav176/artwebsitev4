import React from "react";
import { FlipWords } from "./flip-words";

export function FlipWordsDemo(props) {
    const words = ["RituHandmade Arts"];
  
    return (
      <div className="flex justify-start items-center ">
        <div className={` text-neutral-600 dark:text-neutral-400 ${props.classes}`}>
          <FlipWords words={props.words} />
        </div>
      </div>
    );
  }