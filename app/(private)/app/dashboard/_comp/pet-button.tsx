"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import React, { ReactNode, useState } from "react";
import PetForm from "./pet-form";
import { flushSync } from "react-dom";
import { Pet } from "@prisma/client";


type Props =
  | {
      actionType: "add";
      children?: ReactNode;
    }
  | {
      actionType: "edit";
      children: ReactNode;
    };

const PetButton = ({ actionType, children }: Props) => {
  const isAddAction = actionType === "add";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        {isAddAction ? (
          <Button className="absolute bottom-4 right-4 size-[3rem] rounded-full shadow shadow-primary/50 ring-2 ring-primary ring-offset-2">
            <Plus size={400} />
          </Button>
        ) : (
          <Button asChild variant={"secondary"}>
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left text-2xl uppercase text-primary md:text-4xl">
            {isAddAction ? "Add Pet" : "Edit Pet"}
          </DialogTitle>
        </DialogHeader>
        <PetForm
          isAddAction={isAddAction}
          onFormSubmission={() => {
            flushSync(() => {
              setIsDialogOpen(false);
            });
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PetButton;
