import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   //used in dependence injection was directly run as page rendered
   constructor() {}

   userForm!: FormGroup;
 
   ngAfterViewInit(): void {
     console.log('viewed after initialized');
   }
   ngOnDestroy(): void {
     console.log('login destroyed.');
   }
   ngOnInit(): void {
     this.userForm = new FormGroup({
         email: new  FormControl(null,[Validators.required,Validators.email]),  
         password: new  FormControl(null,[Validators.required])
     })
     console.log('login initialized');
     //     throw new Error('Method not implemented.')
     // }
 
     // formData = {
     //     user:'username',
     //     title:'EventsApp'
   }
 
 onLogin(){
     const values = this.userForm.value;
     console.log('form value => ', values);
 }

}
