import { create } from "zustand";

interface WADotMe {
  nomerWA: number | string;
  pesan: string;
  linkWADotMe: string;
  linkDefaulte: string;
  handleChangeNomerWA: (data: number | string) => void;
  handleChangePesan: (data: string) => void;
  handleChangeLinkWADotMe: (data: string) => void;
}

const useWADotMeStore = create<WADotMe>()((set) => ({
  nomerWA: 0,
  pesan: "",
  linkWADotMe: "",
  linkDefaulte: "https://api.whatsapp.com/send?phone=",
  handleChangeNomerWA: ( data) => {
        set({ nomerWA: data });
  },
  handleChangePesan: ( data) => {
        set({ pesan: data });
  },
  handleChangeLinkWADotMe: ( data) => {
        set({ linkWADotMe: data });
  },
}));

export default useWADotMeStore;
