import { useState } from "react";
import Accordion from "./Accordion";
import Question from "./Question";

// const questions = [
//   {
//     question: "Lorem skncoi ina n cibnoi nconwacin cw?",
//     answer:
//       "Lorem dwncvueb bivuew bveb vrifebv e bieb vpieb vpebvp iubevb ei bvie bvie bivb ewbv iej bvieb vei bvei vbe ibvei bvi ebvibe viebviebw vbwe pieb veb pb veb e vbe pvibe jbvjebvjbebv e",
//     id: 1,
//   },
//   {
//     question: "Lorem skncoi ina n cibnoi nconwacin cw?",
//     answer:
//       "Lorem dwncvueb bivuew bveb vrifebv e bieb vpieb vpebvp iubevb ei bvie bvie bivb ewbv iej bvieb vei bvei vbe ibvei bvi ebvibe viebviebw vbwe pieb veb pb veb e vbe pvibe jbvjebvjbebv e",
//     id: 2,
//   },
// ];

function App() {
  const [questions, setQuestions] = useState([]);
  const handleAddQuestion = function (questionObj) {
    setQuestions((q) => [...q, questionObj]);
  };

  return (
    <div className="bg-lime-100 min-h-screen w-screen flex flex-col items-center justify-center gap-6 font-sans">
      <Question onAddQuestion={handleAddQuestion} />
      <div className="w-[45rem] bg-cyan-100 rounded-lg shadow-lg shadow-cyan-900/50 flex flex-col gap-10 px-8 py-16">
        {questions.map((q, i) => (
          <Accordion question={q} num={i} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
