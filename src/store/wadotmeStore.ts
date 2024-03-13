import { create } from "zustand";

interface WADotMe {
  nomerWA: number;
  pesan: string;
  handleChange: (option: string, data: string) => void;
}

const useWADotMeStore = create<WADotMe>()((set) => ({
  nomerWA: 0,
  pesan: "",
  handleChange: (option, data) => {

  },
}));

export default useWADotMeStore;
