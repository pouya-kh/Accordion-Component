import { useState } from "react";
import Svg from "./Svg";

function Accordion({ question, num }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        id="question"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-5 text-2xl font-sans font-medium tracking-tight px-6 py-8 bg-gray-50 rounded-md shadow-lg shadow-gray-600/30 cursor-pointer text-zinc-900 capitalize mb-2 border-t-4 border-gray-50 transition-all duration-300 ${
          isOpen && "!text-green-600 border-t-4 !border-green-600"
        }`}
      >
        <span className={`text-zinc-400 ${isOpen && "!text-green-600"}`}>
          {num + 1 < 10 ? `0${num + 1}` : num + 1}
        </span>
        <p className="mr-auto w-full hyphens-auto break-all">
          {question.question}
        </p>
        <Svg state={isOpen}></Svg>
      </div>
      <div
        id="dropDown"
        className={`grid mx-auto bg-gray-50/60 rounded-md shadow-sm shadow-gray-500/20 text-lg tracking-wide leading-9 text-center text-pretty absolute top-0 ${
          isOpen && "active"
        }`}
      >
        <p className="overflow-hidden">{question.answer}</p>
      </div>
    </div>
  );
}

export default Accordion;
