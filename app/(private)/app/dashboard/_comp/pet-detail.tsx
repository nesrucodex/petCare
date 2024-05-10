"use client";

import PetButton from "@/app/(private)/app/dashboard/_comp/pet-button";
import { usePetContext } from "@/app/(private)/_contexts/pet-context";
import { Pet } from "@/app/(private)/_util/types";
import H1 from "@/components/h1";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CheckCheck, Edit } from "lucide-react";
import { checkoutPet } from "../_util/actions";

type Props = {};

const PetDetail = (props: Props) => {
  const { selectedPet } = usePetContext();
  if (!selectedPet)
    return (
      <div className="grid h-full place-items-center bg-neutral-100">
        <H1 className="flex flex-col items-center gap-14  opacity-50 ">
          <span className="text-[6rem]">🐰</span>
          <span className="text-sm">Select a pet you wanted to see ?</span>
        </H1>
      </div>
    );
  return (
    <div className="flex h-full flex-col">
      <PetDetailHeader selectedPet={selectedPet} />
      <PetDetailInfo selectedPet={selectedPet} />
      <section className="mx-10 mb-5 flex-1 rounded-md border border-black/10 bg-white">
        <p className=" px-7 py-5 text-sm leading-5 text-neutral-600">
          {selectedPet?.notes}
        </p>
      </section>
    </div>
  );
};

type TPetDetailHeader = {
  selectedPet: Pet | null;
};

function PetDetailHeader({ selectedPet }: TPetDetailHeader) {
  const { handlePetSelection } = usePetContext();
  return (
    <section className="flex h-[5rem] items-center justify-between border border-black_lighten bg-white px-4">
      <div className="flex items-center gap-3 ">
        <Avatar className="size-[3.5rem]">
          <AvatarImage
            src={selectedPet?.imageUrl as string | undefined}
            alt="Pet image"
          />
          <AvatarFallback>{selectedPet?.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-neutral-800">{selectedPet?.name}</p>
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <PetButton actionType="edit">
          <Button
            className="flex items-center gap-2 rounded-full"
            variant={"secondary"}
          >
            Edit <Edit opacity={0.65} size={18} />
          </Button>
        </PetButton>
        <Button
          className="flex items-center gap-2 rounded-full"
          variant={"secondary"}
          onClick={() => {
            checkoutPet(selectedPet!.id);
            handlePetSelection(null);
          }}
        >
          Checkout <CheckCheck opacity={0.65} size={18} />
        </Button>
      </div>
    </section>
  );
}

type TPetDetailInfo = {
  selectedPet: Pet | null;
};
function PetDetailInfo({ selectedPet }: TPetDetailInfo) {
  return (
    <section className="flex items-center justify-around bg-neutral-100 py-5 ">
      <div className="text-center text-neutral-600 ">
        <p className="mb-2 text-sm">Owner Name</p>
        <p className="font-semibold">{selectedPet?.ownerName}</p>
      </div>
      <div className="text-center text-neutral-700 ">
        <p className="mb-2 text-sm">Pet Age</p>
        <p className="font-semibold">{selectedPet?.age}</p>
      </div>
    </section>
  );
}

export default PetDetail;
