import React from "react";

function Acessibilidade() {
  return (
    <>
      <div className="flex  bg-orange-400 z-50  items-end flex-1 h-[480px] space-x-6 md:space-x-10">
        <div className="w-1/3  flex ml-32 space-x-20">
          <button class="bg-blue-300">
            <img
              className="w-32"
              src="\images\microphone.svg"
              alt=""
            />
          </button>

          <button class="px-4 rounded-sm bg-blue-600">
            <img
              className="w-32"
              src="\images\keyboard.svg"
              alt=""
            />
          </button>
        </div>
        
      </div>
    </>
  );
}

export default Acessibilidade;
