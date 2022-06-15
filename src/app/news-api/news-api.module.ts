import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeArticleListComponent } from './de-article-list/de-article-list.component';



@NgModule({
  declarations: [
    DeArticleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DeArticleListComponent
  ]
})
export class NewsApiModule { }
