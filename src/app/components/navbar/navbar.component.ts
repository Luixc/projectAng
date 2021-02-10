import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public service: NavigationService) { }

  ngOnInit(): void {
  }

  cambiarPantalla(nombre){
    this.service.actualOption = nombre;
  }
}
