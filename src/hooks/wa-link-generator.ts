"use client";
import React from 'react'
import useWADotMeStore from "@/store/wadotmeStore";
const waLinkGenerator = () => {
    const handleChangeLinkWADotMe = useWADotMeStore(
        (state) => state.handleChangeLinkWADotMe
      );
      const { linkDefaulte } = useWADotMeStore(
        (state) => state
      );
    const getWaLinkGenerator = (nowa: number | string, pesanwa: string) => {
        handleChangeLinkWADotMe(`${linkDefaulte}62${nowa.toString().replace(/^0+/, '')}&text=${pesanwa.replace(/\s/g, "%20")}`)
    }
  return {getWaLinkGenerator}
}

export default waLinkGenerator;