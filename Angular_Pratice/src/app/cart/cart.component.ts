import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DServiceService } from '../d-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  users='';
  userArr:any=[];
  @Input()studentval:any='';
  @Output() totalCart=new EventEmitter;
  
  constructor(private dservice:DServiceService) {
    this.userArr=this.dservice.userArr;
   }

  ngOnInit(): void {
  }
  addUser(e:any)
  {
    console.log(e.value);
    this.users=e.value;
    this.userArr.push({name:this.users,time:new Date()});
    e.value='';
    this.totalCart.emit(this.userArr);
  }

}
