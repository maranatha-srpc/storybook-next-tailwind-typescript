'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface IGlobalContextProps {
  pageTheme: string;
  setPageTheme: Dispatch<SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<IGlobalContextProps>({
  pageTheme: '',
  setPageTheme: (): string => '',
  isLoggedIn: false,
  setIsLoggedIn: (): boolean => false,
});

export const GlobalContextProvider = ({ children }: any) => {
  const [pageTheme, setPageTheme] = useState<string>('white');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        pageTheme,
        setPageTheme,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
