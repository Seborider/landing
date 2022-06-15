import { Injectable } from '@angular/core';
import { Subject, tap, map, switchMap, Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

interface NewsApiRespone {
  totalResults: number;
  articles: {
    title: string;
    url: string;
  }[]
}
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

  constructor(private http: HttpClient) {
    this.pagesInput = new Subject()
    this.pagesOutput = this.pagesInput.pipe(
      map((page) => {
        return new HttpParams()
        .set('apiKey', this.apiKey)
        .set('country', this.country)
        .set('pageSize', this.pageSize)
        .set('set', page)
      }),
      switchMap((params) => {
        return this.http.get<NewsApiRespone>(this.url, { params })
      })
    )
    this.numberOfPages = new Observable()
  }
}