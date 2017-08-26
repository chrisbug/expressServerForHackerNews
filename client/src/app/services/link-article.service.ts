import { Injectable } from '@angular/core'
import { LinkArticle } from '../models/linkArticle.model';
import { Subject } from 'rxjs/Subject';
import { SendDataService } from './send-data.service';
import { Router } from '@angular/router';

@Injectable()
export class LinkArticleService {
  linkArticlesChanged = new Subject<LinkArticle[]>();
   private linkArticles: LinkArticle[] = [

     new LinkArticle(
       '0',
       'Sample article One',
       'This is just a test article for testing of the test',
       'http://thehackernews.com/2017/08/two-critical-zero-day-flaws-disclosed.html',
       0
     ),

     new LinkArticle(
       '0',
       'Sample article two',
       'this is just the second article cause I do some array stuff',
       'http://thehackernews.com/2017/08/car-safety-hacking.html',
       0
     )
   ]

     constructor(private sdService: SendDataService, private router: Router) { }

   setLinkArticles(linkArticles: LinkArticle[]){
     this.linkArticles = linkArticles;
     this.updateSubject();
   }

   getLinkArticles(){
     return this.linkArticles.slice() //remeber slice gives a copy
   }

   getLinkArticle(index: number){
     return this.linkArticles[index];
   }

   addLinkArticle(linkArticle: LinkArticle){
     var result;
     var newLinkArticle = this.sdService.CreateNewLinkArticle(linkArticle);
     result = this.sdService.saveLinkArticle(newLinkArticle);
     result.subscribe( x => {
       this.linkArticles.push(linkArticle);
       this.updateSubject();
       this.router.navigate(['/article-list/link-article-list'])
     });
   }

   updateLinkArticles(index: number, newLinkArticle: LinkArticle){
     var updatedLinkArticle = this.sdService.CreateNewLinkArticle(newLinkArticle) //Creates the js object for db
     //this.linkArticles[index] = newLinkArticle;
     this.sdService.updateLinkArticle(updatedLinkArticle, newLinkArticle._id).subscribe( x => {
       console.log('sent update');
       this.updateSubject();
     });
   }

   deleteLinkArticle(index: number){
     this.sdService.deleteLinkArticle(this.linkArticles[index]._id).subscribe(data => {
       this.linkArticles.splice(index, 1);
       this.updateSubject();
     });
   }

   updateSubject(){
     this.linkArticlesChanged.next(this.linkArticles.slice());
   }

   addLike(index:number){
     this.linkArticles[index].likes  += 1;
     this.updateSubject();
     this.updateLinkArticles(index, this.linkArticles[index]);
   }

   addDisLike(index:number){
       this.linkArticles[index].likes  += -1;
       let i = 0;
         if(this.linkArticles[index].likes === -10 ){
           this.deleteLinkArticle(index);
         }else {
           this.updateLinkArticles(index, this.linkArticles[index]);
         }
       this.updateSubject();
   }

}
