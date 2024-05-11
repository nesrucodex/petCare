"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type TSearchContext = {
  searchQuery: string;
  handleSeachQuery: (query: string) => void;
};

const SearchContext = createContext<TSearchContext | null>(null);

type TSearchContextProvider = {
  children: ReactNode;
};
export function SearchContextProvider({ children }: TSearchContextProvider) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSeachQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, handleSeachQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider",
    );
  }

  return context;
}
