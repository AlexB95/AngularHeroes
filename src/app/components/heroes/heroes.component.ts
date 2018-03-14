import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:any;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.heroes = data['Heroes'];
    });
  }

  getJSON() {
    return this.http.get('assets/heroes.json')
  }

  ngOnInit() {
  }

}
