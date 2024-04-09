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
        handleChangeLinkWADotMe(`${linkDefaulte}${/^62/.test(nowa.toString())? nowa : '62' + nowa.toString().replace(/^0+/, '')}&text=${pesanwa.replace(/\s/g, "%20")}`)
    }

    const removeLink = () => {
      handleChangeLinkWADotMe(``)
    }
    
  return {getWaLinkGenerator, removeLink}
}

export default waLinkGenerator;