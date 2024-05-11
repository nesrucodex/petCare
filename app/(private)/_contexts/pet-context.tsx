"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useOptimistic,
  useState,
} from "react";
import { Pet } from "../_util/types";
import { addPet, checkoutPet, editPet } from "../app/dashboard/_util/actions";

import { toast } from "sonner";

type TPetContext = {
  pets: Pet[];
  selectedPet: Pet | null;
  handlePetSelection: (pet: Pet | null) => void;
  addPetHandler: (newPet: Omit<Pet, "id">) => Promise<void>;
  editPetHandler: (newPet: Pet) => Promise<void>;
  deletePetHandler: (petId: string) => Promise<void>;
};

const PetContext = createContext<TPetContext | null>(null);

type ActionType =
  | {
      type: "ADD";
      payload: Pet;
    }
  | {
      type: "EDIT";
      payload: Pet;
    }
  | {
      type: "DELETE";
      payload: string;
    };
function reducer(state: Pet[], action: ActionType) {
  const { payload } = action;

  switch (action.type) {
    case "ADD":
      if (typeof payload === "string") return state;
      return [...state, payload];
    case "EDIT":
      if (typeof payload === "string") return state;
      return state.map((pet) =>
        pet.id === payload.id ? { ...pet, ...payload } : pet,
      );
    case "DELETE":
      return state.filter((pet) => pet.id !== payload);
    default:
      return state;
  }
}

type TPetContextProvider = {
  children: ReactNode;
  data: Pet[];
};

export function PetContextProvider({ children, data }: TPetContextProvider) {
  const [pets, dispatch] = useOptimistic(data, reducer);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  function handlePetSelection(pet: Pet | null) {
    setSelectedPet(pet);
  }

  async function addPetHandler(newPet: Omit<Pet, "id">) {
    dispatch({
      type: "ADD",
      payload: { ...newPet, id: Math.random().toString() },
    });
    await addPet(newPet);
  }
  async function editPetHandler(newPet: Pet) {
    dispatch({
      type: "EDIT",
      payload: { ...newPet, id: selectedPet!.id },
    });
    await editPet(newPet);
  }

  async function deletePetHandler(id: string) {
    dispatch({
      type: "DELETE",
      payload: id,
    });

    setSelectedPet(null);
    try {
      await checkoutPet(id);
    } catch (error: any) {
      toast.warning(
        error.message || "Something went wrong while checking out the pet",
      );
    }
  }

  return (
    <PetContext.Provider
      value={{
        selectedPet,
        pets,
        handlePetSelection,
        addPetHandler,
        editPetHandler,
        deletePetHandler,
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
