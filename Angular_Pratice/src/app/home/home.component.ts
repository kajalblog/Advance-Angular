import { Component, OnInit } from '@angular/core';
import { DServiceService } from '../d-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stud:any='';
  items:any='';
  cart=[];
  constructor(private dservice:DServiceService) { 
    this.cart=this.dservice.userArr;
  }

  ngOnInit(): void {
  }
  addStudent(s:any)
  {
    this.stud=s.value;
    // this.student=s.
    console.log(s);
  }
  updatedcart(e:any)
  {
    alert("child to pareny data passed..."+JSON.stringify(e));
    this.items=e;
    // alert(e.value)
  }

}
