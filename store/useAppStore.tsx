import { create } from "zustand";
interface AppState {
    tomatos: number;
    cucumber: number;
    setTomatos: (amount: number) => void;
    setCucumber: (amount: number) => void;
    incrementTomatos: () => void;
    incrementCucumber: () => void;
}

const useAppStore = create<AppState>((set,get) => ({
    tomatos: 0,
    cucumber: 0,

    setTomatos: (amount: number) => set({ tomatos: amount }),
    setCucumber: (amount: number) => set({ cucumber: amount }),

    incrementTomatos: () => set({ tomatos: get().tomatos + 1 }),
    incrementCucumber: () => set({ cucumber: get().cucumber + 1 }),
    // fetchVegetables: async () => {
    //     const response = await fetch('http://127.0.0.1:5500/vegetables.json')
    //     const vegetables = await response.json()
    //     set(vegetables)
    // }
}))
export default useAppStore