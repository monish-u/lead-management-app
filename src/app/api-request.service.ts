import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { forkJoin } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
};
@Injectable({
  providedIn: "root"
})
export class ApiRequestService {
  constructor(private http: HttpClient) {}
  loginBorrower(data) {
    return this.http.post("/api/loginBorrower", data, httpOptions);
  }
  registerCustomer(data) {
    return this.http.post(
      "http://192.168.1.103:9121/registerCustomer",
      data,
      httpOptions
    );
  }
  logOut() {
    return this.http.get("/api/logOut", httpOptions);
  }
  checkUserExists() {
    return this.http.get("/api/checkUserExists", httpOptions);
  }

  fetchQuotes(quoteDetails: any) {
    let myParams = new URLSearchParams();
  myParams.set('loanDuration', quoteDetails.loanDuration);
  myParams.set('reqAmt', quoteDetails.reqAmt);	
  myParams.set('needByDate', quoteDetails.needByDate);
  myParams.set('ratePayable', quoteDetails. ratePayable);

  const fetchQuoteURL = `http://192.168.1.101:9121/getPlQuote?isessionid=a123&loanDuration=${quoteDetails.loanDuration}&reqAmt=${quoteDetails.reqAmt}&needByDate=${quoteDetails.needByDate}&ratePayable=${quoteDetails.ratePayable}`

    return this.http.get<any>(fetchQuoteURL, httpOptions)
  }
}
