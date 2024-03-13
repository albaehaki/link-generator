import React from "react";

function page() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="mx-auto flex flex-col my-auto">
          <h1 className="mx-auto text-4xl font-bold mb-[50px]">
            Gdrive link Generator
          </h1>
          <div className="flex gap-[10px] flex-wrap flex-col mx-auto w-[830px] ">
            <div className="m-auto">
              <img className="w-[100px] rounded-md mb-[10px]" src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" alt=""/>
            </div>
            <form className="w-[60%] m-auto grid">
              <input
                className="dark:text-black focus:ring-0 focus:ring-transparent focus:outline-none  mb-[10px] px-2 py-1 rounded-md"
                type="text"
                placeholder="your link"
              ></input>
              <button className="bg-red-600 px-5 py-2 rounded-md w-[30%] m-auto">
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
