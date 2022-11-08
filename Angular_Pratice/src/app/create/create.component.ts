import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DServiceService } from '../d-service.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createUser:FormGroup;
  successMsg:any;
  getparamId:any;
  constructor(private fb:FormBuilder,private api:DServiceService,private router:ActivatedRoute,private rt:Router) { }

  ngOnInit(): void {
    this.getparamId=this.router.snapshot.paramMap.get('id');
    this.api.getSingleuser(this.getparamId).subscribe((res)=>{
      console.log(res);
      this.createUser.patchValue({
        fullname:res.data[0].fullname,
        email:res.data[0].email,
        mobile:res.data[0].mobile
      })
    })
    this.createUser=this.fb.group({
      fullname:["",[Validators.required,Validators.minLength(6)]],
      email:["",[Validators.required,Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile:["",[Validators.required,Validators.maxLength(10)]]
    })
  }
  addUser()
  {
    console.log(this.createUser.value);
    this.api.createUser(this.createUser.value).subscribe((res)=>{
      console.log(res);
      alert("Data added successfully");
      this.createUser.reset();
      this.successMsg=res.message;
      

    })
  }
  updateUser()
  {
    console.log(this.createUser.value);
    if(this.createUser.valid){
      this.api.updateData(this.createUser.value,this.getparamId).subscribe((res)=>{
        console.log(res.message);
        this.successMsg=res.message;
        setTimeout(() => {
          this.rt.navigate(['/read']);
        }, 2000);
      
        
        
  
      })
    }
    else{
      this.successMsg="All fields are required"
    }
    

  }

}
