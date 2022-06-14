import { Injectable } from '@angular/core';
import { map, Observable, switchMap, pluck, mergeMap, of, filter, toArray } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

interface OpenWeatherResponse {
  list: {
    dt_text: string;
    main: {
      temp: number;
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = "https://api.openweathermap.org/data/2.5/forecast"
  constructor(private http: HttpClient) { }

  getForecast(){
   return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
        .set('lat', String(coords.latitude))
        .set('lon', String(coords.longitude))
        .set('units', 'metric')
        .set('appid', '2b52e06b5ddf84045cc22f2caffe7921')
      }),
      switchMap(params => this.http.get<OpenWeatherResponse>(this.url, {params})),
      pluck('list'),
      mergeMap(value => of(...value)),
      filter((value, index) => index % 8 === 0),
      map((value => {
        return{
          dateString: value.dt_text,
          temp: value.main.temp 
        }
      })),
      toArray()
  )}

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords),
          observer.complete()
        },
        (err) => observer.error(err)
      )
    })
  }
}
