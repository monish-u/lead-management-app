import { Component, OnInit } from "@angular/core";
import { CreateLeadModalService } from "src/app/services/create-lead-modal.service";
import { ApiRequestService } from "src/app/api-request.service";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-campaign-management",
  templateUrl: "./campaign-management.component.html",
  styleUrls: ["./campaign-management.component.css"]
})
export class CampaignManagementComponent implements OnInit {
  private bodyText: string;
  showModalDialog: boolean = false;
  campaignCategory;
  campaignNames;
  campaignNamesList;
  statesList = [];
  citiesList = [];
  citiesSelectList = [];
  managedByList = [];
  campaign_name = "";
  campaign_category = "";
  event_from_date = "";
  event_to_date = "";
  event_state = "";
  event_city = "";
  event_created_by = "";
  event_managed_by_1 = "";
  event_managed_by_2 = "";
  dataPresent: boolean = false;
  printedChannelOption: string;
  showSavedAlert: boolean = true;
  eventsListArr: any;
  hideEventsList: boolean = false;
  constructor(
    private modalService: CreateLeadModalService,
    private http: ApiRequestService,
    private spinner: NgxSpinnerService,
    private ngbModalService: NgbModal
  ) {}
  ngOnInit() {
    this.spinner.show();
    this.bodyText = "This text can be updated in modal 1";
  }
  selectCampaignName() {
    this.campaignNamesList = this.campaignNames[this.campaign_category];
  }
  selectCity() {
    this.citiesSelectList = this.citiesList[this.event_state];
  }
  openModal(id: string) {
    this.showModalDialog = true;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.showModalDialog = false;
    this.modalService.close(id);
  }
  saveLeadData() {
    this.showModalDialog = false;
    this.showSavedAlert = false;
    alert("Lead information saved");
  }
  createEventsList() {
    this.hideEventsList = true;
    this.resetForm();
  }
  backEventsList() {
    this.hideEventsList = false;
    this.dataPresent = false;
    this.resetForm();
  }
  resetForm() {
    this.campaign_name = "";
    this.campaign_category = "";
    this.event_from_date = "";
    this.event_to_date = "";
    this.event_state = "";
    this.event_city = "";
    this.event_created_by = "";
    this.event_managed_by_1 = "";
    this.event_managed_by_2 = "";
  }
  event_campaign_id = 0;
  viewEventsDetails(id) {
    if (this.eventsListArr[id]) {
      this.hideEventsList = true;
      this.dataPresent = true;
      this.campaign_name = this.eventsListArr[id]["campaign_name"];
      this.campaign_category = this.eventsListArr[id]["campaign_category"];
      this.event_from_date = this.eventsListArr[id]["event_from_date"];
      this.event_to_date = this.eventsListArr[id]["event_to_date"];
      this.event_state = this.eventsListArr[id]["event_state"];
      this.event_city = this.eventsListArr[id]["event_city"];
      this.event_created_by = this.eventsListArr[id]["event_created_by"];
      this.event_managed_by_1 = this.eventsListArr[id]["event_managed_by_1"];
      this.event_managed_by_2 = this.eventsListArr[id]["event_managed_by_2"];
      this.event_campaign_id = this.eventsListArr[id]["id"];
    }
  }
  createList() {
    this.spinner.show();
  }
  closeResult: string;
  selectedURL;
  urlCampaignID;
  open(content, val) {}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  viewLeads() {}
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
}
