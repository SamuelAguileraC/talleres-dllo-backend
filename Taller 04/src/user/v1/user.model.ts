import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type UserType = {};

// DECLARE MONGOOSE SCHEMA
const UserSchema: Schema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    hobbies: { type: [String], required: true },
    years: { type: Number, required: true },
    team: { type: String, required: true },
    faction: { type: String, required: true }
});

// DECLARE MONGO MODEL
const UserModel = model<UserType>("User", UserSchema);



// EXPORT ALL
export { UserModel, UserSchema, UserType };
