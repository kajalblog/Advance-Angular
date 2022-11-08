import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      name:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  signUp()
  {
    if(this.signUpForm.valid)
    {
      this.http.post<any>("http://localhost:3000/Users",this.signUpForm.value).subscribe((res)=>{
        alert("registration successfully....");
        this.signUpForm.reset();
        this.router.navigate(['/login']);

      },(err)=>{
        alert(`something wents wrong ...${err}`);
      })
    }
  }

}
