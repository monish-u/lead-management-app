import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { forkJoin } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class ApiRequestService {
  constructor(private http: HttpClient) {}
  loginBorrower() {
    return this.http.get("/api/loginBorrower", httpOptions);
  }
  registerCustomer(data) {
    return this.http.post(
      "http://localhost:3000/api/registerCustomer",
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
}
