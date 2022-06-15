import { Component, OnInit } from '@angular/core';
import { NewsApiService, Article } from '../news-api.service';

@Component({
  selector: 'app-de-article-list',
  templateUrl: './de-article-list.component.html',
  styleUrls: ['./de-article-list.component.css']
})
export class DeArticleListComponent implements OnInit {
  articles!: Article[] 


  constructor(private newsApiService: NewsApiService) { 
    this.newsApiService.pagesOutput.subscribe((articles) => {
      this.articles = articles
    })

    this.newsApiService.getPage(1)
  }
  

  ngOnInit(): void {
  }
}
