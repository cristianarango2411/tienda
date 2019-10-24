import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../models/Carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carousels:Carousel[];
  active:number;

  constructor() {
    this.active=0;
    this.carousels=[
      {
        id:"0",
        headline:"NEW SEASON ARRIVALS.",
        text:"CHECK OUT ALL THE NEW TRENDS",
        button:"Shop Now",
        active:"active"
      },
      {
        id:"1",
        headline:"OLD SEASON ON SALE.",
        text:"CHECK OLD SEASON",
        button:"Shop Now",
        active:""
      },
      {
        id:"2",
        headline:"SEASON 3 ON SALE.",
        text:"CHECK SEASON 3",
        button:"Shop Now",
        active:""
      }
    ];
  }

  ngOnInit() {
  }

  prev(event: Event) {
    
    this.carousels[this.active].active="";
    if (this.active>0)
      this.active--;
    else
      this.active=this.carousels.length-1;
    
    this.carousels[this.active].active="active";
    console.log( this.carousels);
  }


  next(event: Event) {
    
    this.carousels[this.active].active="";
    if (this.active<(this.carousels.length-1))
      this.active++;
    else
      this.active=0;
    
    this.carousels[this.active].active="active";

    console.log( this.carousels);
  }

}
