import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  hide = true;

  loginform!:FormGroup;
  constructor(private formbuilder:FormBuilder, private userservice:UserService, private router:Router){}

  ngOnInit():void {
    this.loginform = this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]]
    });
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl(['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]]);

  getErrorMessageforemail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageforpassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('password') ? 'Not a valid password' : '';
  }

  logIn(){
    console.log("hello")
    if(this.loginform.valid){
      let reqData={
        userEmail:this.loginform.value.email,
        userPassword:this.loginform.value.password
      }
      this.userservice.login(reqData).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem("token",res.data);
        this.router.navigateByUrl("sidenav");
      },(error:any)=>{
        console.log(error)
      })
    }
    else{console.log("Invalid Inputs")}
  }
}


