import React from "react";

import Popup from "./popup";
import ModalRecognit from "./modalrecognit";

function Acessibilidade() {
  return (
    <>
      <div className="flex z-50 justify-center  space-x-6 md:space-x-10">
        <div className="fixed flex bottom-9 space-y-5 right-5 flex-col  ||md:shadow-none md:bg-inherit md:static   md:flex-row   md:space-x-20">
          <ModalRecognit/>
          <Popup/>
        </div>
        
      </div>
    </>
  );
}

export default Acessibilidade;
