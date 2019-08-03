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
}
