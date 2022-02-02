import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistationComponent } from './registation/registation.component';
import { HomeComponent } from './home/home.component';
import { InnertodoComponent } from './innertodo/innertodo.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubmiteComponent } from './submite/submite.component';

const appRoutes:Routes=[
  {path:'', redirectTo:'registration',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'registration',component: RegistationComponent},
  {path:'innerTodo',component:HomeComponent},
  {path:'**',component:PageNotFoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    RegistationComponent,
    HomeComponent,
    InnertodoComponent,
    PageNotFoundComponent,
    SubmiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
