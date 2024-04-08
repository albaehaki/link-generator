"use client"
import React from "react";

import useWADotMeStore from "@/store/wadotmeStore";

import waLinkGenerator from "@/hooks/wa-link-generator";

function page() {
  const handleChangeNomerWA = useWADotMeStore(
    (state) => state.handleChangeNomerWA
  );
  const handleChangePesan = useWADotMeStore(
    (state) => state.handleChangePesan
  );
  const { nomerWA, pesan, linkWADotMe, linkDefaulte } = useWADotMeStore(
    (state) => state
  );
  const { getWaLinkGenerator } = waLinkGenerator()
  console.log(linkWADotMe)
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="mx-auto flex flex-col my-auto">
          <h1 className="mx-auto text-4xl font-bold mb-[50px]">
            Wa.me Generator
          </h1>
          <div className="flex gap-[10px] flex-wrap mx-auto w-[830px] ">
            <form className="w-[60%] m-auto grid">
              <input
                className="dark:text-black focus:ring-0 focus:ring-transparent focus:outline-none  mb-[10px] px-2 py-1 rounded-md"
                type="number"
                placeholder="+62"
                onChange={(e) => handleChangeNomerWA(e.target.value)}
              ></input>
              <textarea
                className="w-full mb-5 rounded-md forced-color-adjust-none dark:text-black focus:ring-0 focus:ring-transparent focus:outline-none px-2 py-1"
                placeholder="Pesan yang dinginkan"
                rows={4}
                onChange={(e) => handleChangePesan(e.target.value)}
              ></textarea>
              <button
              onClick={(event) => {
                event.preventDefault();
                getWaLinkGenerator(nomerWA, pesan)}}
              className="bg-green-600 text-white px-5 py-2 rounded-md w-[30%] m-auto">
                Generate
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
