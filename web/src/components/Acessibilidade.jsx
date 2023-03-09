import React from "react";

function Acessibilidade() {
  return (
    <>
      <div className="flex z-50 justify-center bg-yellow-300 space-x-6 md:space-x-10">
        <div className="fixed bg-gray-200 rounded-lg shadow-xl md:bg-inherit md:static bottom-9   space-x-20">
          <button class="">
            <img
              className="w-24 md:w-20 lg:w-28 2xl:w-40"
              src="\images\microphone.svg"
              alt=""
            />
          </button>

          <button class="px-4 rounded-sm ">
            <img
              className="w-24 md:w-20 lg:w-28 2xl:w-40"
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
