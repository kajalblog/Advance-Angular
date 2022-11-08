import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {
  studentData:any=[];

  constructor() {
    this.studentData=[
      {id:1,name:'kajal',email:'kajal@gmail.com', city:'Pandharpur',stream:'CSE',colorCode:'#db5A90'},
      {id:2,name:'Priyanka',email:'Priyanka@gmail.com', city:'Pune',stream:'',colorCode:'#db5A90'},
      {id:3,name:'Aasha',email:'', city:'Mumbai',stream:'CSE',colorCode:'#db5A90'},
      {id:4,name:'Partiksha',email:'Partiksha@gmail.com', city:'Solapur',stream:'',colorCode:'#db5A90'},
      {id:5,name:'Samiksha',email:'Samiksha@gmail.com', city:'Pandharpur',stream:'CSE',colorCode:'#db5A90'}
    ]
   }

  ngOnInit(): void {
  }

}
