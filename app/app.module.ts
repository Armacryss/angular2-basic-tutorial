import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';
import {AppComponent} from './app.component';
import {PeopleListComponent} from './People/List/people-list.component';
import {PersonDetailsComponent} from './People/Details/person-details.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

