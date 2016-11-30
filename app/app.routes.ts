import {PersonDetailsComponent} from './People/Details/person-details.component';
import {Routes, RouterModule} from '@angular/router';
import {PeopleListComponent} from './People/List/people-list.component';

const routes: Routes = [
    // persons
    {
        path: 'persons',
        component: PeopleListComponent
    },
    // person detail
    {
        path: 'persons/:id',
        component: PersonDetailsComponent
    },
    // home to persons
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    }
]

export const routing = RouterModule.forRoot(routes);