import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user/user.service";
import { Router } from "@angular/router";

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent  {
  registerForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      firstname: [
        "",
        [Validators.required, Validators.pattern("[A-Z][a-z]{2,}")],
      ],
      lastname: [
        "",
        [Validators.required, Validators.pattern("[A-Z][a-z]{2,}")],
      ],
      emailphone: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,16}"
          ),
        ],
      ],
    });
  }
  showpassword: boolean = false;

  toggleshowpassword() {
    this.showpassword = !this.showpassword;
  }

  RegisterSubmit() {
    let reqData = {
      fName: this.registerForm.value.firstname,
      lName: this.registerForm.value.lastname,
      userEmail: this.registerForm.value.emailphone,
      userPassword: this.registerForm.value.password,
    };
    console.log(reqData);
    this.userService.register(reqData).subscribe((res: any) => {
      console.log(res);
    });
  }
}
