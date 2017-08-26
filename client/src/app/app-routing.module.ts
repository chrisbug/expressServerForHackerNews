import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { LinkArticleListComponent } from './article-list/link-article-list/link-article-list.component';
import { NewLinkArticleComponent } from './article-list/link-article-list/new-link-article/new-link-article.component';
import { HnArticleListComponent } from './article-list/hn-article-list/hn-article-list.component';
import { HnArticleDetailComponent } from './article-list/hn-article-list/hn-article-detail/hn-article-detail.component';
import { TopArticleComponent } from './top-article/top-article.component';
import { NewHnArticleComponent } from './article-list/hn-article-list/new-hn-article/new-hn-article.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/article-list', pathMatch: 'full'},
  { path: 'article-list', component: ArticleListComponent, children: [
    {path: 'top-article', component: TopArticleComponent, children: [
      {path:':id', component: HnArticleDetailComponent}
    ]},
    {path:'link-article-list', component: LinkArticleListComponent, children: [
      {path:'add', component: NewLinkArticleComponent}
    ]},
    {path:'hackernews-article-list', component: HnArticleListComponent, children: [
      {path:'add', component: NewHnArticleComponent}, //Rember this one has to go first as it checks from top to bottom
      {path:':id', component: HnArticleDetailComponent}
    ]}
  ] },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
