import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ApiRequestService } from "src/app/api-request.service";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-lead-management",
  templateUrl: "./lead-management.component.html",
  styleUrls: ["./lead-management.component.css"]
})
export class LeadManagementComponent implements OnInit {
  constructor(
    private __http: ApiRequestService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {}
  filterLeadsManagementList;
  leadListArr;
  caseClosedList;
  getCourseList;
  leadsObj = {
    leads_managed_by: "",
    department: "",
    date_contacted: "",
    comment: "",
    enquiry_form_id: ""
  };
  applicationEnrolled = {
    application_status: "",
    status_date: "",
    case_closed_by: "",
    programme: "",
    intake: "",
    enquiry_form_id: ""
  };
  otherStatus = {
    status: "",
    status_date: "",
    case_closed_by: "",
    enquiry_form_id: ""
  };
  @ViewChild("content") private content;
  ngOnInit() {
    this.spinner.show();
  }
  leadsManagementList;
  showSaveButton = false;
  applicationReadOnly = false;
  otherStatusReadOnly = false;
  openLg(id) {
    this.resetForm();
    let outputData;
    this.applicationReadOnly = false;
    this.otherStatusReadOnly = false;
    this.spinner.show();
    this.filterLeadsManagementList = this.leadsManagementList.filter(data => {
      return data.enquiry_form_id == id;
    });

    this.leadsObj.enquiry_form_id = id;
    this.applicationEnrolled.enquiry_form_id = id;
    this.otherStatus.enquiry_form_id = id;
    this.modalService
      .open(this.content, { size: "lg" })
      .result.finally(() => {});
  }
  saveLeads() {
    console.log(this.leadsObj);
    this.spinner.show();
    let enquiry_form_id = this.leadsObj.enquiry_form_id;
  }
  resetForm() {
    this.hideFollowUpFormFlag = true;
    this.hideApplicationAndOtherStatusTabFlag = true;
    this.leadsObj = {
      leads_managed_by: "",
      department: "",
      date_contacted: "",
      comment: "",
      enquiry_form_id: ""
    };
    this.applicationEnrolled = {
      application_status: "",
      status_date: "",
      case_closed_by: "",
      programme: "",
      intake: "",
      enquiry_form_id: ""
    };
    this.otherStatus = {
      status: "",
      status_date: "",
      case_closed_by: "",
      enquiry_form_id: ""
    };
  }
  saveOtherStatus() {
    console.log(this.otherStatus);
    this.spinner.show();
  }
  saveApplication() {
    console.log(this.applicationEnrolled);

    this.spinner.show();
  }
  hideFollowUpFormFlag = true;
  hideApplicationAndOtherStatusTabFlag = true;
  showFollow() {
    this.hideFollowUpFormFlag = false;
  }
}
