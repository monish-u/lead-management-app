import { Component, OnInit, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { ApiRequestService } from "src/app/api-request.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnChanges {
  url = this.router.url;
  constructor(private router: Router, private __http: ApiRequestService) {}
  userExist = null;
  user_logged = "VijayaMaran";
  showDropDown = true;
  ngOnChanges() {
    console.log("omchages");
  }
  ngOnInit() {}
  logOut() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }
  over(el) {
    el.style.display = "block";
  }
}
