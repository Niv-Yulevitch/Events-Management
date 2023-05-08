import { EventModel, IEventModel } from "../4-models/event-model";
import { ITypeModel, TypeModel } from "../4-models/type-model";

async function getAllTypes(): Promise<ITypeModel[]> {
    return TypeModel.find().exec();
};

async function getEventsByType(typeId: string): Promise<IEventModel[]> {
    return EventModel.find({ typeId }).populate("type").exec();
};

async function addEvent(event: IEventModel): Promise<IEventModel> {
    return event.save();
};

async function deleteEvent(_id: string): Promise<void> {
    await EventModel.findByIdAndDelete(_id).exec();
};

export default {
    getAllTypes,
    getEventsByType,
    addEvent,
    deleteEvent
};