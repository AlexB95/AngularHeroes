import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterLinkActive } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroComponent } from './components/heroes/hero/hero.component';
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  /* { path: 'hero/:id', component: HeroDetailComponent },*/
  {
    path: 'heroes',
    component: HeroesComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'heroes/:name',
    component: HeroComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroesComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
