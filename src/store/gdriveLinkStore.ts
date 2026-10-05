import { create } from "zustand";

interface GdriveLinkType {
  linkGdriveLink: string;
  idGdrive: string;
  linkDefaulte: string;
  handleGdriveLink: (data:string) => void;
  handleIdGdrive: (data:string) => void;
}

const useGdriveLink = create<GdriveLinkType>()((set) => ({
  linkGdriveLink: "",
  idGdrive: "",
  linkDefaulte: "https://drive.google.com/uc?export=download&id=",
  handleGdriveLink: ( data) => {
        set({ linkGdriveLink: data });
  },
  handleIdGdrive: ( data) => {
        set({ idGdrive: data });
  }
}));

export default useGdriveLink;
