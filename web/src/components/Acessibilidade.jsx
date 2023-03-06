import React from "react";

function Acessibilidade() {
  return (
    <>
      <div className="flex sm:space-x-20 md:space-x-60">
        <button class="px-4 rounded-sm">
          <img
            className="h-30 sm:w-28 2xl:w-40"
            src="\images\microphone.svg"
            alt=""
          />
        </button>

        <button class="px-4 rounded-sm">
          <img
            className="h-30 sm:w-28 2xl:w-48"
            src="\images\keyboard.svg"
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default Acessibilidade;
