import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LeadManagementComponent } from "./components/lead-management/lead-management.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { LoginComponent } from "./components/login/login.component";
import { HeaderComponent } from "./components/header/header.component";
import { ChartsModule } from "ng2-charts";
import { DashboardChartComponent } from "./components/dashboard-chart/dashboard-chart.component";
import { CreateLeadModalComponent } from "./components/create-lead-modal/create-lead-modal.component";
import { EnquiryFormComponent } from "./components/enquiry-form/enquiry-form.component";
import { CreateLeadModalService } from "./services/create-lead-modal.service";
import { HttpClientModule } from "@angular/common/http";
import { ApiRequestService } from "./api-request.service";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TagInputModule } from "ngx-chips";
import { CampaignManagementComponent } from "./components/campaign-management/campaign-management.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { NewQuoteComponent } from './components/new-quote/new-quote.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeadManagementComponent,
    ReportsComponent,
    LoginComponent,
    HeaderComponent,
    DashboardChartComponent,
    CreateLeadModalComponent,
    EnquiryFormComponent,
    CampaignManagementComponent,
    RegisterFormComponent,
    NewQuoteComponent,
    FooterComponent,
    QuotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    TagInputModule
  ],
  providers: [CreateLeadModalService, ApiRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
