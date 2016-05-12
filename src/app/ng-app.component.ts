import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { UsersComponent } from './+users';


@Component({
  moduleId: module.id,
  selector: 'ng-app-app',
  directives: [NavbarComponent, ROUTER_DIRECTIVES],
  templateUrl: 'ng-app.component.html',
  styleUrls: ['ng-app.component.css'],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/users', component: UsersComponent}
])
export class NgAppAppComponent {
  title = 'ng-app works!';


}
