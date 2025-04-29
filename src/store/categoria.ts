import {create} from "zustand";

interface CategoryState{
    category: number,
    setCategory: (value: number) => void 
}

export const useCategoryStore = create<CategoryState>((set) => ({
    category: 1,
    setCategory: (value) => set({category: value})
}))