import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'compilador';
  constructor(public service: NavigationService){

  }
  get _service(){
    return this.service;
  }
}
