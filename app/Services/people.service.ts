import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/rx';
import {Injectable} from '@angular/core';
import {Person} from '../Classes/person';
import 'rxjs/add/operator/map';

const PEOPLE : Person[] = [
        {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
        {id: 2, name: 'Darth Vader', height: 200, weight: 100},
        {id: 3, name: 'Han Solo', height: 185, weight: 85},
];

const API_URL: string = 'http://swapi.co/api/people';

export interface IPeopleService {
    getAll() : Observable<Person[]>;
    get(id: number) : Observable<Person>;
    clone(object: any) : string;
    save(person: Person) : any;
}

@Injectable()
export class PeopleService implements IPeopleService {
    constructor(private http: Http) {}
    getAll() {
        let people$ = this.http
                        .get(`${API_URL}`, {headers: this.getHeaders()})
                        .map(mapPersons)
                        .catch(handleError);
        return people$;
    }
    get(id: number) {
        let person$ = this.http
                        .get(`${API_URL}/${id}`, {headers: this.getHeaders()})
                        .map(mapPerson)
                        .catch(handleError);
        return person$;
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

    private getHeaders() {
        let headers = new Headers();
        headers.append('accept', 'application/json');
        return headers;
    }
}

function mapPerson(response: Response) : Person {
    return toPerson(response.json());
}

function mapPersons(response: Response) : Person[] {
    return response.json().results.map(toPerson);
}

function toPerson(r:any) : Person {
    let person = <Person>({
        id: extractId(r),
        url: r.url,
        name: r.name,
        weight: r.mass,
        height: r.height,
    });
    console.log('Parsed person:', person);
    return person;
}

function extractId(personData: any) : number
{
    let extractedId = personData.url.replace(API_URL,'').replace('/','');
    return parseInt(extractedId);
}

function handleError(error: any) {
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`;
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
}
