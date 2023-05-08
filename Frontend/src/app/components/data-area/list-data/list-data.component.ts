import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';
import { TypeModel } from 'src/app/models/type.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
    
    public types: TypeModel[];
    public events: EventModel[];

    constructor(private dataService: DataService) { }

    async ngOnInit() {
        try {
            this.types = await this.dataService.getAllTypes();
        } catch (err: any) {
            alert(err.message);
        }
    }

    public async getEvents(args: Event) {
        try {
            const typeId = (args.target as HTMLSelectElement).value;
            this.events = await this.dataService.getEventsByType(typeId);
        } catch (err: any) {
            alert(err.message);
        }
    }

    public async deleteEvent(_id: string) {
        try {
            const ok = window.confirm("האם אתה בטוח?");
            if(!ok) return;

            await this.dataService.deleteEvent(_id);
            
            const index = this.events.findIndex(e => e._id === _id);
            this.events.splice(index, 1);
        } catch (err: any) {
            alert(err.message);            
        }
    }

    public isHappend(date: Date): boolean {
        const now = new Date();
        const dateConventToDateValue = new Date(date);
        return now >= dateConventToDateValue
    };

}
