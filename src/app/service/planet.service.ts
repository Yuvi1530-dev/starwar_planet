import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { enviorment } from "src/envoirment/enviorment";
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  apiUrl: any;
  constructor(private http: HttpClient) {
    this.apiUrl = enviorment.apiUrl
  }

  ApiCall(mode: string, url: string, request: any) {
    if (mode == "POST") {
      return this.http.post(this.apiUrl + url, request, { headers: new HttpHeaders() })
    } else if(mode =="Pagination") {
      return this.http.get(url, { headers: new HttpHeaders() })
    } else {
      return this.http.get(this.apiUrl + url, { headers: new HttpHeaders() })
    }
  }
}