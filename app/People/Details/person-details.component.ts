import {Person} from '../../Classes/person';
import {PeopleService} from '../../Services/people.service';
import { ActivatedRoute, Router} from '@angular/router';
import {Component} from '@angular/core';


@Component({
    selector: 'person-details',
    templateUrl : 'app/People/Details/person-details.component.html'
})

export class PersonDetailsComponent {
    person: Person;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
    sub: any;

    constructor(private peopleService: PeopleService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    goToPeopleList() {
        window.history.back();
        // let destination = ['/persons'];
        // this.router.navigate(destination);
    }

    savePersonDetails() {
        this.peopleService.save(this.person);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            this.person = this.peopleService.get(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
