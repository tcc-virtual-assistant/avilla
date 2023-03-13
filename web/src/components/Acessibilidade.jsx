import React from "react";
import Popup from "./popup";

function Acessibilidade() {
  return (
    <>
      <div className="flex z-50 justify-center  space-x-6 md:space-x-10">
        <div className="fixed flex bottom-9 space-y-5 right-5 flex-col  ||md:shadow-none md:bg-inherit md:static   md:flex-row   md:space-x-20">
          <button class="rounded-full md:rounded-none shadow-xl md:shadow-none">
            <img
              className="  w-12 md:w-20 lg:w-28 2xl:w-40"
              src="\images\microphone.svg"
              alt=""
            />
          </button>


            {/* <img
              className=" w-12 md:w-20 lg:w-28 2xl:w-40"
              src="\images\keyboard.svg"
              alt=""
            /> */}
            <Popup/>
          
        </div>
        
      </div>
    </>
  );
}

export default Acessibilidade;
