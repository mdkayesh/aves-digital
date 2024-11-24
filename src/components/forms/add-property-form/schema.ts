import { z } from "zod";

export const AddPropertySchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  propertyType: z.enum(["apartment", "house", "unit", "commercial", "other"]),
  rentPrice: z
    .string()
    .regex(/^\d+$/, "Rent Price must be a valid number")
    .min(1, "Rent Price is required"),
  rentalStatus: z.enum(["available", "rented"]),
});

export type PropertyType = z.infer<typeof AddPropertySchema> & { id: number };
