import { Component, OnInit } from '@angular/core';
import { HnArticleService } from '../services/hn-article.service';
import { LinkArticleService } from '../services/link-article.service';
import { Subscription } from 'rxjs/Subscription';
import { HnArticle } from '../models/hnArticle.model';
import { LinkArticle } from '../models/linkArticle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  randomHnArticle: HnArticle;
  randomLinkArticle: LinkArticle;
  hnArticles: HnArticle[];
  linkArticles: LinkArticle[];
  whichArticleToUse: number;

  constructor(private hnArticleService: HnArticleService,
              private lArticleService: LinkArticleService,
              private router: Router) {
   }

  ngOnInit() {
    this.whichArticleToUse = Math.floor((Math.random()* 10) + 1);
  }

  getRandomArticle(){
      var id = Math.floor((Math.random() *this.hnArticleService.gethnArticles().length) + 0);
      var url = '/article-list/hackernews-article-list/'+ id;
      this.router.navigate([url]);
  }

}
