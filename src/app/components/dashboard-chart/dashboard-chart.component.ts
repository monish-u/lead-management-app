import { Component, OnInit } from "@angular/core";
import { ApiRequestService } from "src/app/api-request.service";
import { ChartType, ChartOptions } from "chart.js";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-dashboard-chart",
  templateUrl: "./dashboard-chart.component.html",
  styleUrls: ["./dashboard-chart.component.css"]
})
export class DashboardChartComponent implements OnInit {
  constructor(
    private __http: ApiRequestService,
    private __spinner: NgxSpinnerService
  ) {}
  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels = [];
  // public barChartType = "bar";
  // public barChartLegend = true;
  // loaded: boolean = false;
  // public barChartData = [
  //   { data: [32, 22, 27, 22, 16, 12, 37], label: "Data collected" },
  //   { data: [29, 20, 37, 5, 15, 28, 25], label: "Potential data" },
  //   { data: [17, 6, 25, 34, 12, 11, 35], label: "Application" },
  //   { data: [18, 0, 33, 21, 14, 3, 26], label: "Registered" },
  //   { data: [18, 25, 14, 21, 1, 19, 20], label: "Conversion Rate" }
  // ];
  ngOnInit() {
    let myData = new Map();
    let tes = new Map();
  }
  loaded = false;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        }
      }
    }
  };
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];
  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  changeLabels() {}
}
