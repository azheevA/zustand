import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
interface AppState {
    tomatos: number;
    cucumber: number;
    setTomatos: (amount: number) => void;
    setCucumber: (amount: number) => void;
    incrementTomatos: () => void;
    incrementCucumber: () => void;
}

const useAppStore = create<AppState>()(devtools(persist(immer(
    (set,get) => ({
    tomatos: 0,
    cucumber: 0,

    setTomatos: (amount: number) => set({ tomatos: amount }),
    setCucumber: (amount: number) => set({ cucumber: amount }),

    incrementTomatos: () => set({ tomatos: get().tomatos + 1 },false, "incrementTomatos"),
    incrementCucumber: () => {
        if(get().cucumber < 100)
            set({ cucumber: get().cucumber + 1 })
    },
    // fetchVegetables: async () => {
    //     const response = await fetch('http://127.0.0.1:5500/vegetables.json')
    //     const vegetables = await response.json()
    //     set(vegetables)
    // }
})
),{
    name: "app-storage",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({ cucumber: state.cucumber, tomatos: state.tomatos
    })
        
}),{
    store: 'AppStore'
})
); 
export default useAppStore