import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthguardGuard implements CanActivate {
  constructor(private __route: Router) {}
  canActivate() {
    let useridObj = localStorage.getItem("user_val");
    // if (useridObj == null) {
    //   this.__route.navigate(["/"]);
    //   return false;
    // }
    return true;
  }
}
