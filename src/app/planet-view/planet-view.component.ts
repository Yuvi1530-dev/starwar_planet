import { Component, OnInit } from '@angular/core';
import { PlanetService } from "../service/planet.service";

interface planetDetails {
  name: string;
  gravity: string;
  diameter: string; 
  orbital_period: string; 
}
@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.css']
})

export class PlanetViewComponent implements OnInit {

  nextUrl !: string;
  previousUrl !: string;
  planetData:planetDetails[]=[];
  skullLoading: boolean = true;
  
  constructor(private service: PlanetService) {

  }
  ngOnInit(): void {
    this.loadPlanetDetails()
  }
  loadPlanetDetails() {
    this.service.ApiCall("GET", "?format=json", "").subscribe((data: any) => {
      let result = data;
      this.planetData = data.results;
      this.removeLoading();
      this.nextUrl = result.next;
      this.previousUrl = result.previous

    })
  }

  nextData = (next: any) => {
    this.skullLoading = true;
    this.service.ApiCall("Pagination", next, "").subscribe((data: any) => {
      let result = data;
      this.planetData = data.results;
      this.nextUrl = result.next;
      this.previousUrl = result.previous;
      this.removeLoading();
    })
  }
  previousData = (previous: any) => {
    this.skullLoading = true;
    this.service.ApiCall("Pagination", previous, "").subscribe((data: any) => {
      let result = data;
      this.planetData = data.results;
      this.nextUrl = result.next;
      this.previousUrl = result.previous;
      this.removeLoading();
    })
  }
  removeLoading() {
    setTimeout(() => {
      this.skullLoading = false;
    }, 2500);
  }
}

