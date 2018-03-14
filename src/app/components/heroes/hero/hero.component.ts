import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero:any;

  constructor(private _location: Location, private http: HttpClient, private route: ActivatedRoute) { 
    let name: String;
    this.route.params.subscribe(params => name = params.name);
    this.getJSON().subscribe(data => {
      data['Heroes'].forEach(heroT => {
        if(heroT.name.toLowerCase() === name.toLowerCase())
          this.hero = heroT;
      });
    });
    
  }

  getJSON() {
    return this.http.get('assets/heroes.json')
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
}

}
