import { getModelForClass, Prop, prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

export class User {
  @Prop({ type: String }) // auto generated id
  id?: mongoose.Types.ObjectId;

  @Prop({ type: String })
  username!: string;

  @Prop({ type: String })
  email!: string;

  @Prop({ type: String })
  password: string;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
});
