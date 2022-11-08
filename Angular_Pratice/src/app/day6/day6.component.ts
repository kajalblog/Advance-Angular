import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {
  EmpArray:any[]=[];
  EmployeeData={
    empId:0,
    firstname:'',
    email:'',
    address:''
  }

  constructor() { }

  ngOnInit(): void {
    const localData=localStorage.getItem('empdata');
    if(localData!=null)
    {
      this.EmpArray=JSON.parse(localData);
    }
  }
  onAddEmployee()
  {
    //
    const notNull=document.getElementById('empmodal');
  // debugger
    if(notNull!=null)
    {
      notNull.style.display='block';
    }
  }
  onCloseModal()
  {
    console.log("hello")
    // debugger
    const notVal=document.getElementById('empmodal');
    if(notVal != null)
    {
      notVal.style.display= 'none';
    }
    this.EmployeeData={
      empId:0,
      firstname:'',
      email:'',
      address:''
    }

  }
  onEdit(emp:any)
  {
    this.onAddEmployee();
    this.EmployeeData=emp;

  }
  onAdded(data:any)
  {
    this.EmployeeData.empId=this.EmpArray.length+1;
    this.EmpArray.push(this.EmployeeData);
    this.EmployeeData={
      empId:0,
      firstname:'',
      email:'',
      address:''
    }
    localStorage.setItem('empdata',JSON.stringify(this.EmpArray));

  }
  onUpdated()
  {
    const record=this.EmpArray.find((e)=>e.empId==this.EmployeeData.empId);
    record.firstname=this.EmployeeData.firstname;
    record.email=this.EmployeeData.email;
    record.address=this.EmployeeData.address
    localStorage.setItem('empdata',JSON.stringify(this.EmpArray));

  }

}
