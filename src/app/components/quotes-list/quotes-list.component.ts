import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiRequestService } from 'src/app/api-request.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
quoteDetailsData;
fetchedQuotes;
  constructor(private router: Router, private ApiRequestService: ApiRequestService) { 
    this.quoteDetailsData = this.router.getCurrentNavigation().extras.state.quoteDetailsData;
  }

  ngOnInit() {
    this.getFetchedQuotes(this.quoteDetailsData);
    console.log(this.quoteDetailsData);
  }

  getFetchedQuotes(quoteDetailsData) {
    this.ApiRequestService.fetchQuotes(quoteDetailsData).subscribe(res => {
      this.fetchedQuotes = res;
    });

    //this.fetchedQuotes = this.ApiRequestService.fetchQuotes(quoteDetailsData)
  }

}
