import mongoose from "mongoose";
import { TypeModel } from "./type-model";

//* Interface:
export interface IEventModel extends mongoose.Document {
    typeId: mongoose.Schema.Types.ObjectId;
    dateAndTime: Date;
    description: string;
    address: string;
    numOfPeoples: number;
}

//* Schema:
export const EventSchema = new mongoose.Schema<IEventModel>({
    typeId: mongoose.Schema.Types.ObjectId,
    dateAndTime: Date,
    description: String,
    address: String,
    numOfPeoples: Number
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

EventSchema.virtual("type", {
    ref: TypeModel,
    localField: "typeId",
    foreignField: "_id",
    justOne: true
})

//* Model:
export const EventModel = mongoose.model<IEventModel>("EventModel", EventSchema, "events");