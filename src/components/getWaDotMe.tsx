"use client"
import React, {useState} from "react";

import useWADotMeStore from "@/store/wadotmeStore";

import waLinkGenerator from "@/hooks/wa-link-generator";
import Link from 'next/link'

const getWaDotMe = () => {
    const [isCopy, setIsCopy] = useState(false)
  const handleChangeNomerWA = useWADotMeStore(
    (state) => state.handleChangeNomerWA
  );

  const handleChangePesan = useWADotMeStore((state) => state.handleChangePesan);

  const { nomerWA, pesan, linkWADotMe, linkDefaulte } = useWADotMeStore(
    (state) => state
  );

  const { removeLink } = waLinkGenerator();

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          setIsCopy(true)
          navigator.clipboard.writeText(linkWADotMe);
        }}
        className="bg-green-600 text-white px-5 py-2 rounded-md w-full m-auto shadow-lg"
      >
        {isCopy? 'Sudah dicopy' : 'Copy Link'}
      </button>



      <Link
       href={`/wa-link-generator`}
        onClick={(event: any) => {
          event.preventDefault();
          setIsCopy(false)
          removeLink();
        }}
        className="bg-green-600 text-white px-5 py-2 rounded-md w-full m-auto shadow-lg"
      >
         {/* <Link href={`/wa-link-generator`} className={boxMenu}></Link> */}
        Buat link lainnya
      </Link>
    </>
  );
};

export default getWaDotMe;
