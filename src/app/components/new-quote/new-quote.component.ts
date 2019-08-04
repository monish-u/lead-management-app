import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  selectedQuoteType: string = "";
  loanDuration: string;
  amountRequested: string;
  ratePayable: string;
  needByDate: string;
  sendAnotherAcc: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectQuote(event) {
    this.selectedQuoteType = event.target.value;

    console.log(event.target.value);
  }

  fetchQuotes() {
    const quoteDetailsData = {
      loanDuration: this.loanDuration,
      reqAmt: this.amountRequested,
      ratePayable: this.ratePayable,
      needByDate: this.needByDate

    }

    this.router.navigate(['quotes-list'], { state: { quoteDetailsData: quoteDetailsData } });


    
  }

}
