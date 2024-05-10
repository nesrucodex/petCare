"use client";
import { cn } from "@/lib/utils";

import { useSearchContext } from "../_contexts/search-context";
import { usePetFilter } from "../_util/hooks";
import { usePetContext } from "@/app/(private)/_contexts/pet-context";

import { Pet } from "@/app/(private)/_util/types";
import Loading from "@/components/loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const PetList = (props: Props) => {
  const { pets } = usePetContext();
  const { searchQuery } = useSearchContext();
  const { filteredPets, isPetsEmpty } = usePetFilter(pets, searchQuery);

  if (filteredPets.length === 0 && !isPetsEmpty)
    return (
      <div className="h-full bg-neutral-100">
        <Loading size={80} />
      </div>
    );
  else if (isPetsEmpty)
    return (
      <div className="grid h-full place-items-center bg-neutral-100">
        <h1 className="text-xl font-semibold text-neutral-900/30">
          No pets found
        </h1>
      </div>
    );
  return (
    <ul className="scroll_bar scroll_bar_none max-h-[66vh] space-y overflow-x-hidden overflow-y-scroll bg-white">
      {filteredPets.map((pet) => (
        <PetItem key={pet.id} data={pet} />
      ))}
    </ul>
  );
};

type PetItemProp = {
  data: Pet;
};

const PetItem = ({ data }: PetItemProp) => {
  const { selectedPet, handlePetSelection } = usePetContext();
  const isSelectedPet = selectedPet?.id === data.id;

  return (
    <li
      className={cn(
        "cursor-pointer transition hover:bg-neutral-200/70 focus-visible:bg-neutral-200/70 rounded-md",
        {
          "bg-neutral-100 border border-black/5 ": isSelectedPet,
        },
      )}
      onClick={() => handlePetSelection(data)}
    >
      <button className="flex h-[4rem] items-center gap-3 px-4">
        <Avatar className="size-[2.5rem]">
          <AvatarImage
            className="object-cover"
            src={data.imageUrl || ""}
            alt="Cat photo"
          />
          <AvatarFallback>{data.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-semibold text-neutral-700">{data.name}</p>
      </button>
    </li>
  );
};

export default PetList;
