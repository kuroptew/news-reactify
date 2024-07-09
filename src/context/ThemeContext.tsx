import { createContext, ReactNode, useContext, useState } from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};

interface IThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({children}:IThemeProviderProps) {
  const [isDark ,setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((prev) => !prev)
  };

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};