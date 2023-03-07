import React from "react";

function Acessibilidade() {
  return (
    <>
      <div className="flex justify-center items-center space-x-6 md:space-x-10">
        <button class="">
          <img
            className="w-32"
            src="\images\microphone.svg"
            alt=""
          />
        </button>

        <button class="px-4 rounded-sm">
          <img
            className="w-32"
            src="\images\keyboard.svg"
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default Acessibilidade;
