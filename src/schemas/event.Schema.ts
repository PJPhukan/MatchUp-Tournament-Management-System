import { z } from 'zod'

export const CreateEventSchema = z.object({
    name: z.string()
        .min(8, "Event title length must be atleast 8 characters")
    ,
    description: z.string()
        .min(8, "Event description length must be atleast 8 characters"),
    poster: z.any().refine((file) => {
        if (!(file instanceof File)) {
            return false;
        }
        const acceptedImageTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
        return acceptedImageTypes.includes(file.type);
    }, { message: "Poster must be a valid image (JPEG, PNG, or WebP)" }),
    startDate: z.date(),
    endDate: z.date(),
    vill: z.string(),
    pincode: z.string()
        .length(7, "Picode length must be 7 characters")
        .refine((val) => !isNaN(Number(val)), { message: "Must be a number" })
        .transform((val) => Number(val)),
    state: z.string(),
    district: z.string(),

})