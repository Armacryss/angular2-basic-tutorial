import { Component } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
    selector: 'people-list',
    template: `
    <ul>
        <li *ngFor="let person of people" (click)="selectPerson(person)">
            {{person.name}}
        </li>
    </ul>
    <person-details [person]="selectedPerson"></person-details>
    `
})

export class PeopleListComponent {
    people: Person[] = [];
    selectedPerson: Person;

    constructor(private _peopleService: PeopleService) {}

    ngOnInit() {
        this.people = this._peopleService.getAll();
    }

    selectPerson(person:Person) {
        this.selectedPerson = person;
    }
}