import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventModel } from '../models/event.model';
import { TypeModel } from '../models/type.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public async getAllTypes(): Promise<TypeModel[]> {
        const observable = this.http.get<TypeModel[]>(environment.typesUrl);
        return await firstValueFrom(observable);
    }

    public async getEventsByType(typeId: string): Promise<EventModel[]> {
        const observable = this.http.get<EventModel[]>(environment.eventsByTypeUrl + typeId);
        const events = await firstValueFrom(observable);
        events.map(e => e.dateAndTimeLocalString = new Date(e.dateAndTime).toLocaleString("he-IL"));
        return events;
    }

    public async addEvent(event: EventModel): Promise<EventModel> {
        const observable = this.http.post<EventModel>(environment.eventsUrl, event);
        return await firstValueFrom(observable);
    }

    public async deleteEvent(_id: string): Promise<void> {
        const observable = this.http.delete(environment.eventsUrl + _id);
        await firstValueFrom(observable);
    }
}
