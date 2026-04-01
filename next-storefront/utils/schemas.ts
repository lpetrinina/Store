import * as z from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .min(2, { error: "Name must be at least 2 characters." })
        .max(100, { error: "Name must be less than 100 characters." }),
    company: z
        .string()
        .min(2, { error: "Company must be at least 2 characters." })
        .max(100, { error: "Company must be less than 100 characters." }),
    featured: z.coerce.boolean(),
    price: z.coerce
        .number()
        .min(0, { error: "Price must be a positive number." }),
    description: z.string().refine(
        (description) => {
            const wordCount = description.split(" ").length;
            return wordCount >= 10 && wordCount <= 1000;
        },
        { error: "Description must be between 10 and 1000 words." },
    ),
});
