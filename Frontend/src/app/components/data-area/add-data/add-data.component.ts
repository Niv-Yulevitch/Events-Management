import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/models/event.model';
import { TypeModel } from 'src/app/models/type.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-add-data',
    templateUrl: './add-data.component.html',
    styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

    public types: TypeModel[];
    public event = new EventModel();

    constructor(private dataService: DataService, private router: Router) { }

    async ngOnInit() {
        try {
            this.types = await this.dataService.getAllTypes();
        } catch (err: any) {
            alert(err.message);
        }
    }

    public async send() {
        try {
            await this.dataService.addEvent(this.event);
            alert("אירוע חדש נוסף!");
            this.router.navigateByUrl("/list");
        } catch (err: any) {
            alert(err.message);
        };
    };
};
