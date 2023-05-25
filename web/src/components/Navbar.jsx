import React from "react";

function Navbar() {
  return (
    <>
      <div className="z-50 w-full ">
        <div className=" h-4 flex">
          <img
            style={{ objectFit: "cover", width: "100%" }}
            src="\images/bosch_faixa.svg"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex-shrink-0 w-46 ">
            <a href="">
              <img
                className=" w-60 h-19"
                src="/images/bosch_logo.svg"
                width="full"
                alt="Your Company"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
