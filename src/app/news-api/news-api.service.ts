import { Injectable } from '@angular/core';
import { Subject, tap, map, switchMap, Observable, pluck } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

interface NewsApiRespone {
  totalResults: number;
  articles: Article []
}

interface Article {
  title: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines'
  private pageSize = 10
  private apiKey = '394893550f72462f826c57c9142aa6d0'
  private country = 'de'

  private pagesInput: Subject<number>
  pagesOutput: Observable<Article[]>
  numberOfPages: Subject<number>

  constructor(private http: HttpClient) {
    this.numberOfPages = new Subject()
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
      }),
      tap((apiResponse) => {
        const totalPages = Math.ceil(apiResponse.totalResults / this.pageSize)
        this.numberOfPages.next(totalPages)
      }),
      pluck('articles')
    )
  }

  getPage(page: number) {
    this.pagesInput.next(page)
  }
}
