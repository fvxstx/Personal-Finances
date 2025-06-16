import { z } from "zod";

// Schema validation Zod
export const accountSchema = z.object({
  initialValue: z
    .number({ invalid_type_error: "Informe um valor válido" })
    .min(0, "Valor não pode ser negativo"),
  bank: z.string().min(2, "Informe a instituição bancária"),
  excludeFromTotal: z.boolean().optional(),
});

export type AccountFormData = z.infer<typeof accountSchema>;
