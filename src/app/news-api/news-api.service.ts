import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines'
  private pageSize = 10
  private apiKey = '394893550f72462f826c57c9142aa6d0'
  private country = 'de'

  constructor() { }
}
