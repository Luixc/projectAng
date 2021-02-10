import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.less']
})
export class RankingComponent implements OnInit {

  constructor(public service: NavigationService) { }

  ngOnInit(): void {
  }
  cambiarPantalla(nombre){
    this.service.actualOption = nombre;
  }
}
