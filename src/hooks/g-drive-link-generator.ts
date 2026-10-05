"use client";
import React from 'react'
import useGDriveLinkStore from "@/store/gdriveLinkStore";
const gDriveLinkGenerator = () => {
    const handleGdriveLink = useGDriveLinkStore(
        (state) => state.handleGdriveLink
      );
      const { linkDefaulte } = useGDriveLinkStore(
        (state) => state
      );
    const getGDriveLinkGenerator = (link: string) => {
     console.log(link);
    }

    const removeLink = () => {
      handleGdriveLink(``)
    }
    
  return {getGDriveLinkGenerator, removeLink}
}

export default gDriveLinkGenerator;