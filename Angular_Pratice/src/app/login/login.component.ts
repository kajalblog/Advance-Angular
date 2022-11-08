import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  result:any='';
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router ) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }
  login()
  {
    this.http.get("http://localhost:3000/Users").subscribe((res)=>{
      console.log(res);
      // res.find()
      this.result=res
      this.result.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      })
      if(this.result)
      {
        alert("Login Successfull");
        this.loginForm.reset();
        this.router.navigate(['/about']);

      }
      else
      {
        alert("User not found...")
      }

    

    },(err)=>{
      console.log(err);
    })
  }

}
