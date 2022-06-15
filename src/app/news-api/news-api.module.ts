import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeArticleListComponent } from './de-article-list/de-article-list.component';
import { TrimOutletNamePipe } from './trim-outlet-name.pipe';



@NgModule({
  declarations: [
    DeArticleListComponent,
    TrimOutletNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DeArticleListComponent
  ]
})
export class NewsApiModule { }
