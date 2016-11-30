import {Injectable} from '@angular/core';
import {Person} from '../Classes/person';

const PEOPLE : Person[] = [
        {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
        {id: 2, name: 'Darth Vader', height: 200, weight: 100},
        {id: 3, name: 'Han Solo', height: 185, weight: 85},
];

export interface IPeopleService {
    getAll() : Person[];
    get(id: number) : Person;
    clone(object: any) : string;
    save(person: Person) : any;
}

@Injectable()
export class PeopleService implements IPeopleService {
    getAll() : Person[] {
        return PEOPLE;
    }
    get(id: number) {
        return this.clone(PEOPLE.find(person => person.id === id));
    }
    clone(object: any) {
        return JSON.parse(JSON.stringify(object));
    }
    save(person: Person) {
        let originalPerson = PEOPLE.find(people => people.id === person.id);
        if(originalPerson) {
            Object.assign(originalPerson, person);
        }
    }
}