import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '309da6aaee3aa861f86ce0edac145a51';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
    {})
  }
}
