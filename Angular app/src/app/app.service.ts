import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  submit(data) {
    return new Promise<any>(() => {
      this.http.post(this.url+'pollutants',data).subscribe((res) => {
        console.log('Response from Server:');
        console.log(JSON.stringify(res));
      })
    })
  }
}
