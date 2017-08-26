import { Component, OnInit, Input } from '@angular/core';
import { HnArticleService } from '../../../services/hn-article.service';
import { HnArticle } from '../../../models/hnArticle.model';

@Component({
  selector: 'app-hn-article-list-item',
  templateUrl: './hn-article-list-item.component.html',
  styleUrls: ['./hn-article-list-item.component.css']
})
export class HnArticleListItemComponent implements OnInit {
@Input() hnArticle: HnArticle;
@Input() index: number;

  constructor(private hnArticleService: HnArticleService) { }

  ngOnInit() {
  }

  onAddLike(){
    this.hnArticleService.addLike(this.index)
  }
  onAddDisLike(){
    this.hnArticleService.addDisLike(this.index)
  }

}
