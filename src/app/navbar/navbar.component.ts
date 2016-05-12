import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  directives:[ROUTER_DIRECTIVES],
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {

  constructor(private _router: Router){  
    
  }
  
}
