"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { Pet } from "../_util/types";
import { addPet } from "../app/dashboard/_util/actions";

type TPetContext = {
  pets: Pet[];
  selectedPet: Pet | null;
  handlePetSelection: (pet: Pet | null) => void;
};

const PetContext = createContext<TPetContext | null>(null);

type TPetContextProvider = {
  children: ReactNode;
  data: Pet[];
};
export function PetContextProvider({
  children,
  data: pets,
}: TPetContextProvider) {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  function handlePetSelection(pet: Pet | null) {
    setSelectedPet(pet);
  }

  return (
    <PetContext.Provider
      value={{
        selectedPet,
        pets,
        handlePetSelection,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

export function usePetContext() {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePetContext must be used within a PetContextProvider");
  }

  return context;
}
