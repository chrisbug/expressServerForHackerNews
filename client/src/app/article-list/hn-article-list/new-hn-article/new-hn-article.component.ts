import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { HnArticle } from '../../../models/hnArticle.model';
import { HnArticleService } from '../../../services/hn-article.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-hn-article',
  templateUrl: './new-hn-article.component.html',
  styleUrls: ['./new-hn-article.component.css']
})
export class NewHnArticleComponent implements OnInit {
  @ViewChild('f') hnArticleForm: NgForm;
  subscription: Subscription;

  constructor(private hnaService: HnArticleService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newHnArticle = new HnArticle('280', value.title, value.description, value.article, value.imageLink, 0);
    console.log(newHnArticle);
    this.hnaService.addHnArticle(newHnArticle);
  }

}
