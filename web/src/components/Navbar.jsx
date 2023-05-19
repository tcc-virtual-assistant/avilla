import React, {useEffect, useState} from "react";
// import { useRouter } from 'next/router';
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter()
  const {locale} = router
  
  const changeLocale = (e) =>{
    const locale = e.target.value
    router.push('/','/',{locale})
  }
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
            <a href="/">
              <img
                className=" w-60 h-19"
                src="/images/bosch_logo.svg"
                width="full"
                alt="Your Company"
              />
            </a>
          </div>
          <div className="flex mt-6 mr-3">
            <div class="a-dropdown flex">
              <select
                className="h-8 flex align-middle"
                id="demo"
                aria-label="here goes the aria label for the dropwdown"
              >
                <option value='pt' onClick={()=> changeLocale('en')}>Português</option>
                <option value='en'>English</option>
                <option value='es'>Español</option>
                {/* <option value='"Deutsch"'>Deutsch</option> */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
