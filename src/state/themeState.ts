import { create } from "zustand";


type themeStore = {
    theme: "Light" | "Dark",
    setTheme: () => void
}

const useThemeStore = create<themeStore>()((set, get) => ({
    theme: "Dark",
    setTheme: () => {
        const currTheme = get().theme;
        if (currTheme === "Dark") {
            set({ theme: "Light" });
        } else {
            set({ theme: "Dark" });
        }
    }
}));


export default useThemeStore;