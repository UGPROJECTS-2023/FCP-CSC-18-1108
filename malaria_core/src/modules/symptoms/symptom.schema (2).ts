import { boolean, object, number, string, TypeOf } from "zod";

export const updateSymptomSchema = {
  body: object({
    name: string(),
  }),
  params: object({
    symptom_Id: string(),
  }),
};

export type updateSymptomBody = TypeOf<typeof updateSymptomSchema.body>;
export type updateSymptomParams = TypeOf<typeof updateSymptomSchema.params>;
