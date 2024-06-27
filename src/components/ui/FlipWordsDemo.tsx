import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
    const words = ["RituHandmade Arts"];
  
    return (
      <div className="flex justify-start items-center ">
        <div className="text-4xl font-semibold text-neutral-600 dark:text-neutral-400 ">
          <FlipWords words={words} />
        </div>
      </div>
    );
  }