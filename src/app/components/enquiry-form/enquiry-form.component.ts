import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ApiRequestService } from "src/app/api-request.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Location } from "@angular/common";
@Component({
  selector: "app-enquiry-form",
  templateUrl: "./enquiry-form.component.html",
  styleUrls: ["./enquiry-form.component.css"]
})
export class EnquiryFormComponent implements OnInit {
  closeResult: string;
  getCourseList;
  campaignDetails;
  higherQualificationList;
  schoolsList;
  caseStatusList;
  caseHandledList;
  campaignID;
  constructor(
    private modalService: NgbModal,
    private _http: ApiRequestService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router,
    private __location: Location
  ) {}
  @ViewChild("content") private content;
  loadAllData(campaign_id) {
    this.campaignID = campaign_id;
    this.spinner.show();
  }
  student_email = "";
  isBase64(str) {
    if (str === "" || str.trim() === "") {
      return false;
    }
    try {
      return btoa(atob(str)) == str;
    } catch (err) {
      return false;
    }
  }
  base_page = "";
  ngOnInit() {
    this.spinner.show();
    let campaign_id = this.route.snapshot.queryParamMap.get("campaign_id");
    let student_email = this.route.snapshot.queryParamMap.get("student_email");
    this.base_page = this.route.snapshot.queryParamMap.get("base_page");
    if (this.isBase64(campaign_id)) {
      this.loadAllData(atob(campaign_id));
    } else {
      location.href = "";
      return true;
    }
  }
  openLg() {
    this.modalService.open(this.content, { size: "lg" });
  }
  student_name;
  higher_qualification;
  nric;
  case_handled_by;
  case_status;
  school_name;
  mobile_number;
  program_interested;
  assign_to;
  campaign_url;
  saveStudentInfo() {
    let user_data = {
      student_name: this.student_name,
      student_email: this.student_email,
      higher_qualification: this.higher_qualification,
      nric: this.nric,
      case_handled_by: "test",
      case_status: this.case_status,
      school_name: this.school_name,
      mobile_number: this.mobile_number,
      program_interested: this.program_interested,
      assign_to: "test",
      campaign_url: "===",
      campaign_id: this.campaignID
    };
    let valueFlag = true;
    Object.entries(user_data).forEach(([key, value]) => {
      if (value == undefined || value == "") {
        valueFlag = false;
      }
    });
    if (!valueFlag) {
      alert("Field cannot be empty");
      return true;
    }
  }
}
