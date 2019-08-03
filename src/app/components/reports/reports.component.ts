import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.css"]
})
export class ReportsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  showMonth(year) {
    this.showMonthFlag = false;
    this.selectedClass = year;
  }
  showMonthFlag: boolean = true;
  selectedClass: string = "2017";
  showPageData: string = "year-month";
  bindEventContainer(event) {}
  selectedMonthValue: string = "January";
  selectedYearValue: string = "2017";
  showReportLink: string = "default";
}
