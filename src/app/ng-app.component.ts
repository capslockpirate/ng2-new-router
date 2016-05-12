import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  moduleId: module.id,
  selector: 'ng-app-app',
  directives: [NavbarComponent],
  templateUrl: 'ng-app.component.html',
  styleUrls: ['ng-app.component.css']
})
export class NgAppAppComponent {
  
}
