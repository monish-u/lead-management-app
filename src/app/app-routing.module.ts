import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { LeadManagementComponent } from "./components/lead-management/lead-management.component";
import { LoginComponent } from "./components/login/login.component";
import { EnquiryFormComponent } from "./components/enquiry-form/enquiry-form.component";
import { CampaignManagementComponent } from "./components/campaign-management/campaign-management.component";
import { AuthguardGuard } from "./authguard.guard";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { NewQuoteComponent } from './components/new-quote/new-quote.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: "quotes-list",
    component: QuotesListComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: "new-quote",
    component: NewQuoteComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: "reports",
    component: ReportsComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: "lead",
    component: LeadManagementComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: "campaign",
    component: CampaignManagementComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: "register",
    component: RegisterFormComponent,
    canActivate: [AuthguardGuard]
  },
  { path: "enquiry-form", component: EnquiryFormComponent },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
