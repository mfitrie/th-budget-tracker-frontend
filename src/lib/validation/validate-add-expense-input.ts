import { z } from "zod";

const addExpenseSchema = z.object({
    amount: z.number(),
    expenseName: z.string().min(1),
    timestamp: z.string().min(1),
    category: z.string().min(1),
    notes: z.string(),
    user: z.string(),
    currency: z.string(),
});

export default addExpenseSchema;

