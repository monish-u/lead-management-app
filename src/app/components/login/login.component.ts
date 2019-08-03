import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiRequestService } from "src/app/api-request.service";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private __http: ApiRequestService,
    private __spinner: NgxSpinnerService
  ) {}
  user_name;
  user_password;
  public onLoginClick() {
    this.__spinner.show();
  }

  ngOnInit() {}
}
