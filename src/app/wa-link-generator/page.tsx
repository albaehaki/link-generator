"use client"
import React from "react";

import Link from 'next/link'

import useWADotMeStore from "@/store/wadotmeStore";

import waLinkGenerator from "@/hooks/wa-link-generator";

import GenerateWADotMe from "@/components/generateWADotMe";
import GetWaDotMe from "@/components/getWaDotMe";

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

  const { getWaLinkGenerator, removeLink } = waLinkGenerator()

  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="mx-auto flex flex-col my-auto">
          <h1 className="mx-auto text-4xl font-bold mb-[50px]">
            Wa.me Generator
          </h1>
          <div className="flex flex-wrap mx-auto  gap-5">
            {linkWADotMe.length === 0? <GenerateWADotMe />: <GetWaDotMe />  }
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
