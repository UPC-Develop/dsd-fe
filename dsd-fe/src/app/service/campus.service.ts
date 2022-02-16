import { Injectable } from "@angular/core";
//import { NgxSoapService, Client, ISoapMethodResponse } from "ngx-soap";

@Injectable({
  providedIn: "root"
})
export class CampusService {
  
    //client!: Client;

    constructor(/*private soap: NgxSoapService*/) {
    }

    getSede() {
        /*this.soap.createClient("http://localhost:64593/CampusService.svc?wsdl").then(client => {
            console.log('Client', client);
            this.client = client;
          })
          .catch(err => console.log('Error', err));  */
    }

}