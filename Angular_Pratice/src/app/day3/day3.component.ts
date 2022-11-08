import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {
  isSidePanelOpen:boolean=true;
  classFunction:string='';
  role:string='';
  theme:string='bg-danger';
  stateValue:string='';
  stateArr:string[]=['Pune','Mumbai','Solapur','Kolhapur']
  constructor() {
    // this.issidePanel=false;
   }

  ngOnInit(): void {
  }
  isSidePanel() {
    return this.isSidePanelOpen;
  }
  addPanel()
  {
    this.isSidePanelOpen=false;
  }
  closePanel()
  {
      this.isSidePanelOpen=true;
  }
  onFunction(type:string)
  {
    this.classFunction=type;
  }
  getTheme()
  {
    return 'bg-success';
  }
  
}
