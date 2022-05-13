import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { PasswordValidator } from '../password.validator';
import { RegisterCustomerService } from 'src/Services/register-customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registrationForm!:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,private registerService:RegisterCustomerService,private router:Router) {
    this.registrationForm=this.fb.group({
      customerId:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      phoneNumber:[
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      },{validator:PasswordValidator});




   }

  ngOnInit(): void {
  }

  onPress(){
    this.router.navigate(['/item-page']);

  }
  onRegister(){
    this.registerService.register(this.registrationForm.value)
    .subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/login']);
    
    
    })

  }
}
