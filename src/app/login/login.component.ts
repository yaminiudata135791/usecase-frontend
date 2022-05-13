import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCustomerService } from 'src/Services/login-customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successMessage:string ="";
  loginForm!: FormGroup;
 submitted: boolean=false;

  constructor(private fb:FormBuilder,private loginService: LoginCustomerService,private router:Router ) { 
  this.loginForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
    password: ['', [Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]],

  });



  }

  ngOnInit(): void {
  }
  // onSubmit(){
    
  // }
  
  login(){
    this.successMessage="Please wait logging in..."
     console.log(this.loginForm)
  }

  onLogin(){
    this.loginService.login(this.loginForm.value)
    .subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/restaurant']);
    
    })
    
  }
}


