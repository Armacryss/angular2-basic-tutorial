import { Component } from '@angular/core';
import { Person } from '../../Classes/person';
import { PeopleService } from '../../Services/people.service';
import { Observable } from 'rxjs/rx';

@Component({
    selector: 'people-list',
    templateUrl: 'app/People/List/people-list.component.html'
})

export class PeopleListComponent {
    sub: any;
    people: Observable<Person[]>;
    selectedPerson: Person;
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(private _peopleService: PeopleService) {}

    ngOnInit() {
        this.people = this._peopleService.getAll();
    }

    ngOnDestroy() {
        //this.sub.unsubscribe();
    }
}