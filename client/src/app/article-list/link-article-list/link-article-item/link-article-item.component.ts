import { Component, OnInit, Input } from '@angular/core';
import { LinkArticleService } from '../../../services/link-article.service'
import { LinkArticle } from '../../../models/linkArticle.model';

@Component({
  selector: 'app-link-article-item',
  templateUrl: './link-article-item.component.html',
  styleUrls: ['./link-article-item.component.css']
})
export class LinkArticleItemComponent implements OnInit {
  //These are passed in from article-list and used for binding
  @Input() linkArticle: LinkArticle;
  @Input() index: number;

  constructor(private linkArticleService: LinkArticleService) { }

  ngOnInit() {
  }

  onAddLike(){
    this.linkArticleService.addLike(this.index)
    console.log('button pressed');
  }
  onAddDisLike(){
    this.linkArticleService.addDisLike(this.index)
  }

}
