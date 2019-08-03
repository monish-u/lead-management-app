import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  over(el) {
    el.style.display = "block";
  }
  leave(el) {
    el.style.display = "none";
  }
}
