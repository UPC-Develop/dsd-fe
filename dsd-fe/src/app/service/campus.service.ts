import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CampusService {
  
    constructor(private http: HttpClient) {
    }

    getCampus() {
      return this.http.get('https://pichanguito-campus.azurewebsites.net/api/campus/list-campus?active=' + 1).pipe();
    }

}