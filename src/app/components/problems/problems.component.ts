import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.less']
})
export class ProblemsComponent implements OnInit {

  menuOptions = [];

  actualOption = null;
cards = [
    {id: 1, name:'Introduccion'},
    {id: 2, name:'Matematicas'},
    {id: 5, name:'Grafos'},
    {id: 3, name:'Otros'},
];
  constructor(public service: NavigationService,) { }

  ngOnInit(): void {
    // this.menuOptions = [
    //   {
    //     text: 'introduccion',
    //     link: 'introduccion'
    //   },
    //   {
    //     text: 'Gráficos',
    //     link: 'graphs'
    //   },
    //   {
    //     text: 'Dashboards',
    //     link: 'dashboards'
    //   },
    // ];
    // this.setOption(this.menuOptions[0]);
  }

  // setOption(option) {
  //   this.actualOption = option;
  //   this.navigationService.openMenu = false;
  //   this.navigationService.actualPage = option.link;
  // }

  // get navService() {
  //   return this.navigationService;
  // }
  get _service(){
    return this.service;
  }
  cambio(name){
    this.service.optionproblems = name;
  }
}
