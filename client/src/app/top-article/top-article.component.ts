import { Component, OnInit, OnDestroy } from '@angular/core';
import { LinkArticleService } from '../services/link-article.service';
import { HnArticleService } from '../services/hn-article.service';
import { LinkArticle } from '../models/linkArticle.model';
import { HnArticle } from '../models/hnArticle.model';
import { HnArticleListItemComponent } from '../article-list/hn-article-list/hn-article-list-item/hn-article-list-item.component';
import { HnArticleDetailComponent } from '../article-list/hn-article-list/hn-article-detail/hn-article-detail.component';
import { LinkArticleItemComponent } from '../article-list/link-article-list/link-article-item/link-article-item.component';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-top-article',
  templateUrl: './top-article.component.html',
  styleUrls: ['./top-article.component.css']
})
export class TopArticleComponent implements OnInit, OnDestroy {
  linkArticles : LinkArticle[];
  hnArticles : HnArticle[];
  hnMostLikedArticle: HnArticle = new HnArticle('0','name','des','art','img',-11);
  linkMostLikedArticle: LinkArticle = new LinkArticle('1', 'title','des','link',-11);
  hnid: number;
  linkid: number;
  subscriptionhn: Subscription;
  subscriptionln: Subscription;
  constructor(private hnArticleService: HnArticleService,
              private lArticleService: LinkArticleService) { }

  ngOnInit() {
    console.log('ng on it runs');
    this.subscriptionhn = this.hnArticleService.hnArticlesChanged.subscribe(
      (hnArticles: HnArticle[]) => {
        this.hnArticles = hnArticles;
      }
    );
    this.subscriptionln = this.lArticleService.linkArticlesChanged.subscribe(
      (linkArticles: LinkArticle[]) => {
        this.linkArticles = linkArticles;
      }
    );
    this.hnArticles = this.hnArticleService.gethnArticles();
    this.linkArticles = this.lArticleService.getLinkArticles();
    this.getMostLikedHnArticle();
    this.getMostLikedLinkArticle();
    }

    getMostLikedHnArticle(){
      let i:number = 0;
      while( i < this.hnArticles.length){
        if(this.hnArticleService.getHnArticle(i).likes > this.hnMostLikedArticle.likes){
          this.hnid = i;
          this.hnMostLikedArticle = this.hnArticleService.getHnArticle(i);
        }
        i++;
      }
    }

    getMostLikedLinkArticle(){
      let i:number = 0;
      while( i < this.linkArticles.length){
        if(this.linkArticles[i].likes > this.linkMostLikedArticle.likes){
          this.linkid = i;
          this.linkMostLikedArticle = this.lArticleService.getLinkArticle(i);
        }
        i++;
      }
    }

    ngOnDestroy(){
      this.subscriptionln.unsubscribe();
      this.subscriptionhn.unsubscribe();
    }

}
