import { useState } from "react";

function Question({ onAddQuestion }) {
  const [userQ, setUserQ] = useState("");
  const [userA, setUserA] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (userQ.trim().length < 5 || userA.length < 1) return;

    onAddQuestion({ question: userQ, answer: userA });
  };
  return (
    <div className="mb-10 w-full py-10">
      <form
        className="w-full mx-auto flex items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-[30rem] flex flex-col gap-1">
          <input
            type="text"
            placeholder="Type the question..."
            value={userQ}
            onChange={(e) => setUserQ(e.target.value)}
            className="text-lg px-4 py-2 outline-none rounded-md shadow-lg shadow-gray-300/80 text-zinc-900 tracking-wide"
          ></input>
          <input
            type="text"
            placeholder="Type the answer..."
            value={userA}
            onChange={(e) => setUserA(e.target.value)}
            className=" text-lg px-4 py-2 outline-none rounded-md shadow-lg shadow-gray-300/80 text-zinc-900 tracking-wide"
          ></input>
        </div>
        <button className="bg-cyan-100 px-8 py-2 rounded-md uppercase font-bold text-zinc-800 tracking-thin shadow-md shadow-zinc-500/50 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-500 hover:text-white hover:shadow-lg  active:scale-95 active:shadow-sm active">
          add
        </button>
      </form>
    </div>
  );
}

export default Question;
