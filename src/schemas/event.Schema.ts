import { z } from "zod";
export const createEventSchema = z.object({
  name: z.string().min(8, "Event title length must be atleast 8 characters"),
  description: z.string().min(8, "Event description length must be atleast 8 characters"),
  startDate: z.date(),
  endDate: z.date(),
  vill: z.string(),
  pincode: z
    .string()
    .length(6, "Picode length must be 6 characters")
    .refine((val) => !isNaN(Number(val)), { message: "Must be a number" })
    .transform((val) => Number(val)),
  state: z.string(),
  district: z.string(),
  poster: z.array(z.instanceof(File))
  .refine((files) => files.length > 0, { message: "poster must be selected" }),
});
