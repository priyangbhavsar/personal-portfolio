import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  downloadFile(url: any): Observable<HttpEvent<any>> {
    return this.http.get('localhost:4200/personal-portfolio/resume/resume.pdf',
      {
        responseType: 'blob',
        reportProgress: true,
        observe: 'events',
        headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Referer': '',
        'Access-Control-Allow-Credentials': 'true'

      })
      })
  }
}
