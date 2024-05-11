import { z } from "zod";

export const petSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name of a pet must be specified"),
  ownerName: z.string().min(3, "Owner name must be specified"),
  age: z.coerce.number().positive("Age of a pet must be positive"),
  imageUrl: z.string().nullable(),
  notes: z.string().nullable(),
});

export const petsSchema = z.array(petSchema);

export type Pet = z.infer<typeof petSchema>;
