import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProblemsComponent } from './components/problems/problems.component';
import {MatCardModule} from '@angular/material/card';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { IntroduccionComponent } from './components/problems/introduccion/introduccion.component';
import { MatematicasComponent } from './components/problems/matematicas/matematicas.component';
import { GrafosComponent } from './components/problems/grafos/grafos.component';
import { OtrosComponent } from './components/problems/otros/otros.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { TableproblemsComponent } from './components/problems/tableproblems/tableproblems.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

// import { CardComponent } from './components/problems/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProblemsComponent,
    LoginComponent,
    IntroductionComponent,
    IntroduccionComponent,
    MatematicasComponent,
    GrafosComponent,
    OtrosComponent,
    RankingComponent,
    TableproblemsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSliderModule,
    MatTableModule,
    HttpClientModule ,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
