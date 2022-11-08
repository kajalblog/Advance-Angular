import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {
  isShow:boolean;
  isActive:boolean=true;
  fName:string='kajal';
  lName:string='kajal';

  isActiveDiv4:boolean=true;

  constructor() {
    this.isShow=true;
    // this.isActive=true;
  
   }

  ngOnInit(): void {
  }
  hideDiv1()
  {
    this.isShow=false;
  }
  showDiv1()
  {
    this.isShow=true;
  }
  getVisible()
  {
    return  this.isActive;
  }
  showDiv3()
  {
    return this.isActive=true;
  }
  hideDiv3()
  {
    return this.isActive=false
  }

}
