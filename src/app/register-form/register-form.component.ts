import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiRequestService } from "src/app/api-request.service";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  constructor(
    private router: Router,
    private __http: ApiRequestService,
    private __spinner: NgxSpinnerService
  ) {}
  user_name;
  user_password;
  date_of_birth;
  first_name;
  last_name;
  mobile_number;
  user_email;
  user_id;
  user_confirm_password;
  ngOnInit() {}
  checkDB() {
    alert(this.date_of_birth);
  }
  public onRegisterClick() {
    this.__spinner.show();
    let obj = {
      firstName: this.first_name,
      lastName: this.last_name,
      email: this.user_email,
      phone: this.mobile_number,
      dob: this.date_of_birth,
      userid: this.user_id,
      password: this.user_password
    };
    this.__http.registerCustomer(obj).subscribe(response => {
      console.log(response);
    });
  }
}
