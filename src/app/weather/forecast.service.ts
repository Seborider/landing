import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor() { }

  getForecast(){
   return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
        .set('lat', String(coords.latitude))
        .set('lon', String(coords.longitude))
        .set('units', 'metric')
        .set('appid', '2b52e06b5ddf84045cc22f2caffe7921')
      })
    )
  }

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
