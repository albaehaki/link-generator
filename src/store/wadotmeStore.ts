import { create } from "zustand";

interface SignUp {
  nomerWA: number;
  pesan: string;
  handleChange: (option: string, data: string) => void;
}

const useSignUpStore = create<SignUp>()((set) => ({
  nomerWA: 0,
  pesan: "",
  handleChange: (option, data) => {
    
  },
}));

export default useSignUpStore;
