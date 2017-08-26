import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LinkArticle } from '../../../models/linkArticle.model';
import { LinkArticleService } from '../../../services/link-article.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-link-article',
  templateUrl: './new-link-article.component.html',
  styleUrls: ['./new-link-article.component.css']
})
export class NewLinkArticleComponent implements OnInit {
  @ViewChild('f') linkArticleForm: NgForm;
  subscription: Subscription;

  constructor(private laService: LinkArticleService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newLinkArticle = new LinkArticle('290', value.title, value.description, value.link, 0);
    this.laService.addLinkArticle(newLinkArticle);
  }

}
