import { Pet } from "@/app/(private)/_util/types";
import { useEffect, useState } from "react";

export function usePetFilter(pets: Pet[], searchQuery: string) {
  const [isPetsEmpty, setIsPetsEmpty] = useState(false);

  const filteredPets = pets.filter((pet) => {
    return pet.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const DELAY = 2000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (filteredPets.length === 0) setIsPetsEmpty(true);
      else setIsPetsEmpty(false);
    }, DELAY);

    return () => {
      clearTimeout(timeout);
    };
  }, [filteredPets]);

  return { filteredPets, isPetsEmpty };
}
