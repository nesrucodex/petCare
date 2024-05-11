"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { petSchema } from "@/app/(private)/_util/types";
import { usePetContext } from "@/app/(private)/_contexts/pet-context";
import { useState } from "react";
import { fromError } from "zod-validation-error";
import { useFormStatus } from "react-dom";

import { toast } from "sonner";
type Props = {
  isAddAction: boolean;
  onFormSubmission?: () => void;
};

const PetForm = ({ isAddAction, onFormSubmission }: Props) => {
  const { selectedPet, addPetHandler, editPetHandler } = usePetContext();
  const [error, setError] = useState<undefined | string>(undefined);

  return (
    <form
      className="flex flex-col gap-y-2"
      action={async (formData) => {
        onFormSubmission?.();
        const data = Object.fromEntries(formData);
        const validatedPet = petSchema.omit({ id: true }).safeParse(data);
        if (!validatedPet.success) {
          const errorMessage = fromError(validatedPet.error).toString();
          toast.warning(errorMessage);
          return;
        }
        if (isAddAction) {
          await addPetHandler(validatedPet.data);
        } else await editPetHandler({ ...validatedPet.data, id: selectedPet!.id });
      }}
    >
      {error && (
        <p className="rounded-md bg-red-100 px-5 py-2 text-xs text-red-600">
          {error}
        </p>
      )}
      <div className="space-y-0.5">
        <Label className="text-xs text-primary/70" htmlFor="owner-name">
          Owner name
        </Label>
        <Input
          spellCheck={false}
          name="ownerName"
          className=""
          type="text"
          id="owner-name"
          defaultValue={selectedPet?.ownerName || "Nesredin Getahun"}
        />
      </div>
      <div className="space-y-0.5">
        <Label className="text-xs text-primary/70" htmlFor="pet-name">
          Pet name
        </Label>
        <Input
          spellCheck={false}
          name="name"
          className=""
          type="text"
          id="pet-name"
          defaultValue={selectedPet?.name || "Doro"}
        />
      </div>
      <div className="space-y-0.5">
        <Label className="text-xs text-primary/70" htmlFor="age">
          Pet age
        </Label>
        <Input
          spellCheck={false}
          name="age"
          className=""
          type="number"
          id="age"
          defaultValue={selectedPet?.age || 3}
        />
      </div>
      <div className="space-y-0.5">
        <Label className="text-xs text-primary/70" htmlFor="pet-image-url">
          Pet image-URL
        </Label>
        <Input
          spellCheck={false}
          name="imageUrl"
          className=""
          type="text"
          id="pet-image-url"
          defaultValue={
            selectedPet?.imageUrl ||
            "https://media.istockphoto.com/id/1389862392/photo/womans-hand-stroking-a-ginger-cat-on-isolated-white-background.webp?b=1&s=170667a&w=0&k=20&c=Eyk-QXXniagDRn2vdhleE2ecAC7rGW1iJOEwB1y4rSo="
          }
        />
      </div>
      <div className="space-y-0.5">
        <Label className="text-xs text-primary/70" htmlFor="notes">
          Notes
        </Label>
        <Textarea
          spellCheck={false}
          name="notes"
          rows={3}
          defaultValue={
            selectedPet?.notes || "PetCare is a place for keeping your pets."
          }
        />
      </div>
      <PetFormBtn isAddAction={isAddAction} />
    </form>
  );
};

type PetFormBtnProp = {
  isAddAction: boolean;
};

function PetFormBtn({ isAddAction }: PetFormBtnProp) {
  const { pending } = useFormStatus();
  let content = "";
  if (isAddAction && !pending) content = "Add new Pet";
  else if (isAddAction && pending) content = "Adding new pet...";
  else if (!isAddAction && !pending) content = "Edit pet";
  else if (!isAddAction && pending) content = "Editing the pet..";

  return (
    <div className="mt-10 flex justify-end">
      <Button disabled={pending} type="submit">
        {content}
      </Button>
    </div>
  );
}

export default PetForm;
