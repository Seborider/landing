import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from '../forecast.service';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecastData$: Observable<{dateString: string; temp: number}[]>

  constructor(forecastService: ForecastService) { 
    this.forecastData$ = forecastService.getForecast()
      
    
  }

  ngOnInit(): void {
  }

}
