import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent {
  resetForm!:FormGroup;
  token:any;

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.resetForm = this.formbuilder.group({
      password: [
        "",
        [
          Validators.required,
          // Validators.pattern(
          //   "(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,16}"
          // ),
        ],
      ],
      confirmpassword: [
        "",
        [
          Validators.required,
          // Validators.pattern(
          //   "(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,16}"
          // ),
        ],
      ]
    });
  }

  showpassword: boolean = false;

  toggleshowpassword() {
    this.showpassword = !this.showpassword;
  }

  ResetSubmit(){
    let reqData = {
      newPassword: this.resetForm.value.password,
      confirmPassword: this.resetForm.value.confirmpassword,
    };
    console.log(reqData);
    this.userService.reset(reqData,this.token).subscribe((res: any) => {
      console.log(res);
    });
  }
}

