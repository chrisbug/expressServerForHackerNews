import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HnArticleService } from '../../../services/hn-article.service';
import { HnArticle } from '../../../models/hnArticle.model';
import { DataTestService } from '../../../services/data-test.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-hn-article-detail',
  templateUrl: './hn-article-detail.component.html',
  styleUrls: ['./hn-article-detail.component.css']
})
export class HnArticleDetailComponent implements OnInit {
  hnArticle: HnArticle;
  id: number;

  constructor(private hnArticleService: HnArticleService,
              private route: ActivatedRoute,
              private router: Router,
              private dataTestService: DataTestService) { }

  ngOnInit() {
    this.dataTestService.getHnArticles();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.hnArticle = this.hnArticleService.getHnArticle(this.id);
      }
    );
  }

  onAddLike(){
    this.hnArticleService.addLike(this.id);
  }

  onAddDisLike(){
    this.hnArticleService.addDisLike(this.id);
  }

}
