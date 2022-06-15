import { Injectable } from '@angular/core';
import { Subject, tap, map, switchMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines'
  private pageSize = 10
  private apiKey = '394893550f72462f826c57c9142aa6d0'
  private country = 'de'

  pagesInput: Subject<number>
  pagesOutput: Observable<any>
  numberOfPages: Observable<number>

  constructor() {
    this.pagesInput = new Subject()
    this.pagesOutput = this.pagesInput.pipe()
    this.numberOfPages = new Observable()
  }
}
