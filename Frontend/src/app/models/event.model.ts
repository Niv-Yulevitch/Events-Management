import { TypeModel } from "./type.model";

export class EventModel {
    _id: string;
    typeId: string;
    dateAndTime: Date;
    dateAndTimeLocalString: string;
    description: string;
    address: string;
    numOfPeoples: number;
    type: TypeModel;
}