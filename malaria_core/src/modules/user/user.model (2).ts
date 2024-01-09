import { getModelForClass, prop, pre, Ref } from '@typegoose/typegoose';
import argon2 from 'argon2';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);
@pre<User>('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const hash = await argon2.hash(this.password);
    this.password = hash;
    return next();
  }
})
export class User {
  @prop({ required: true, unique: true })
  public email: string;

  @prop({ required: true, default: false  })
  public verified: boolean;

  @prop({ required: true, default: false  })
  public admin: boolean;

  @prop({ required: true })
  public password: string;
  
  @prop({ unique: true, default: () => nanoid() })
  public user_Id: string;

  @prop({ required: true })
  public first_name: string;

  @prop({ required: true })
  public last_name: string;

  public async comparePassword(password: string): Promise<boolean> {
    return argon2.verify(this.password, password);
  }
}
export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});
