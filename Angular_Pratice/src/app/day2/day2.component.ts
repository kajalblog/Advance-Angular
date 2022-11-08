import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Day2Service } from './day2.service';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {
// Variable always define above the constructor and method always define after ngOninit()
  cityArr:string[];
  studentList:any[];
  userList:Observable<any>;
  constructor(private user:Day2Service ) {
    this.userList=this.user.getData();
    console.log(this.userList);
    this.cityArr=['Pune','Mumbai','Nashik','Solapur','Kolhapur'];
    this.studentList=[
      {
        id:1,
        fname:'kajal',
        lname:'Prachande',
        role:'admin',
        contactNumbers:['123456','22145689'],
        address:{
          add1:"abc",
          add2:"xyz"
        }
      },
      {
        id:2,
        fname:'Tejal',
        lname:'Prachande',
        role:'user',
        contactNumbers:['123456','22145689'],
        address:{
          add1:"abc",
          add2:"xyz"
        }
      },
      {
        id:3,
        fname:'Parshant',
        lname:'Prachande',
        role:'user',
        contactNumbers:['123456','22145689'],
        address:{
          add1:"abc",
          add2:"xyz"
        }
      }
    ]
   }
  

  ngOnInit(): void {
    this.getServicedata();
  }
  getStudent()
  {
    const students=['Shraddha','Soham','Samiksha'];
    return students;
  }
  getUsers()
  {
    const users=[
      {
        id:1,
        fname:'kajal',
        lname:'Prachande',
        role:'admin',
        contactNumbers:['123456','22145689']
      },
      {
        id:2,
        fname:'Tejal',
        lname:'Prachande',
        role:'user',
        contactNumbers:['123456','22145689']
      },
      {
        id:3,
        fname:'Parshant',
        lname:'Prachande',
        role:'user',
        contactNumbers:['123456','22145689']
      }
    ]
    return users;
  }
  getFullname(fname:string,lname:string)
  {
    return fname+" " +lname;
  }
  getServicedata()
  {
    this.user.getData().subscribe(res=>{
      console.log(res);
    })
  }
}
