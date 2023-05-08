import mongoose from "mongoose";

//* Interface:
export interface ITypeModel extends mongoose.Document {
    typeName: string;
}

//* Schema:
export const TypeSchema = new mongoose.Schema<ITypeModel>({
    typeName: String
}, {
    versionKey: false
});

//* Model:
export const TypeModel = mongoose.model<ITypeModel>("TypeModel", TypeSchema, "types");