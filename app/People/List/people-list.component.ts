import { Component } from '@angular/core';
import { Person } from '../../Classes/person';
import { PeopleService } from '../../Services/people.service';

@Component({
    selector: 'people-list',
    templateUrl: 'app/People/List/people-list.component.html'
})

export class PeopleListComponent {
    people: Person[] = [];
    selectedPerson: Person;

    constructor(private _peopleService: PeopleService) {}

    ngOnInit() {
        this.people = this._peopleService.getAll();
    }
}