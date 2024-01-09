import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { customAlphabet } from 'nanoid';
import { User } from '../user/user.model';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export class Symptom {
  @prop({ required: true })
  public name: string;

  @prop({ unique: true, default: () => nanoid() })
  public symptom_Id: string;

  @prop({ required: true, default: false })
  public required: boolean;
  // @prop({ required: true, ref: () => User })
  // public owner: Ref<User>;


}

export const SymptomModel = getModelForClass(Symptom, {
  schemaOptions: {
    timestamps: true,
  },
});
