import { create } from "zustand"

const Store = create((set) => ({
    currency: "usd",
    setCurrency: (newCurrency) => set((state) => {
        return {
            ...state,
            currency: newCurrency
        }
    })
}))

export default Store;