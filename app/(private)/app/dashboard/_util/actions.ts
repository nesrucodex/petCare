"use server";
import { revalidatePath } from "next/cache";
import { fromError } from "zod-validation-error";

import prisma from "@/lib/db";

import { petSchema, petsSchema, Pet } from "@/app/(private)/_util/types";

export async function getPets() {
  try {
    const pets = await prisma.pet.findMany();
    const validatedPets = petsSchema.safeParse(pets);

    if (!validatedPets.success)
      throw new Error(fromError(validatedPets.error).toString());

    return pets;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong when getting pets.");
  }
}
export async function addPet(pet: Omit<Pet, "id">) {
  const validatedPet = petSchema.omit({ id: true }).safeParse(pet);
  try {
    if (!validatedPet.success)
      throw new Error(fromError(validatedPet.error).toString());

    await prisma.pet.create({ data: validatedPet.data });
    revalidatePath("/app", "layout");
  } catch (error: any) {
    throw new Error(
      error.message || "Something went wrong when adding pet to db.",
    );
  }
}
export async function editPet(pet: Pet) {
  const validatedPet = petSchema.safeParse(pet);
  try {
    if (!validatedPet.success)
      throw new Error(fromError(validatedPet.error).toString());

    await prisma.pet.update({
      where: { id: pet.id },
      data: pet,
    });
    revalidatePath("/app", "layout");
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong when editing pet.");
  }
}
export async function checkoutPet(id: string) {
  try {
    await prisma.pet.delete({
      where: { id },
    });
    revalidatePath("/app", "layout");
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong when deleting pet");
  }
}
