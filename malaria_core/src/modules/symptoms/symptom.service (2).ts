import { Symptom, SymptomModel } from "./symptom.model";

export function createSymptom(input: Partial<Symptom>) {
  return SymptomModel.create(input);
}

export function findSymptom(symptom_Id: Symptom["symptom_Id"]) {
  return SymptomModel.findOne({ symptom_Id });
}
// export async function findUserByWard(ward: Assignment["ward"]) {
//   return AssignmentModel.findOne({ ward });
// }
// export function findBaskets() {
//   return basket_Id.find({
//     published: true,
//   }).lean();
// }
