import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { customAlphabet } from 'nanoid';
import { User } from '../user/user.model';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export class Party {
  @prop({ required: true })
  public drug_name: string;
  @prop({ required: true })
  public candidate: string

  @prop({ unique: true, default: () => nanoid() })
  public drug_Id: string;

  @prop({ required: true })
  public votes: number;

  @prop({ required: true, ref: () => User })
  public owner: Ref<User>;


}

export const PartyModel = getModelForClass(Party, {
  schemaOptions: {
    timestamps: true,
  },
});
