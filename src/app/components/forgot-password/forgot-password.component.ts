import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgotForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService :UserService){}
  ngOnInit(): void {
    this.forgotForm=this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
    })
  }

  ForgotSubmit(){let reqData={
    userEmail:this.forgotForm.value.email,
  }
  console.log(reqData);
  this.userService.forget(reqData).subscribe((res:any)=>{
    console.log(res);
  })
 }
}
