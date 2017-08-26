import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HnArticle } from '../models/hnArticle.model';
import { LinkArticle } from '../models/linkArticle.model';
import 'rxjs';

@Injectable()
export class SendDataService {

  constructor(private http: Http) {
   }

   CreateNewHnArticle(hnArticle: HnArticle){
     var newHnArticle = {
          title: hnArticle.title,
          description: hnArticle.description,
          article: hnArticle.article,
          imageLink: hnArticle.imageLink,
          likes: hnArticle.likes
     }
     return newHnArticle;
   }

   CreateNewLinkArticle(linkArticle: LinkArticle){
     var newLinkArticle = {
       title: linkArticle.title,
       description: linkArticle.description,
       link: linkArticle.link,
       likes: linkArticle.likes
     }
     return newLinkArticle;
   }

   saveHnArticle(hnArticle){
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     console.log(JSON.stringify(hnArticle));
     return this.http.post('http://localhost:3000/api/v1/hnarticle/save', JSON.stringify(hnArticle), {headers: headers})
     .map(res => res.json());
   }

   deleteHnArticle(id){
    return this.http.delete('http://localhost:3000/api/v1/hnarticle/remove/'+id).map(res => res.json());
   }

   updatehnArticle(hnArticle, articleid: string){
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.put('http://localhost:3000/api/v1/hnarticle/'+ articleid, JSON.stringify(hnArticle), {headers: headers}).map(
       res => res.json());
   }

   saveLinkArticle(linkArticle){
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     console.log(JSON.stringify(linkArticle));
     return this.http.post('http://localhost:3000/api/v1/linkarticle/save', JSON.stringify(linkArticle), {headers: headers})
     .map(res => res.json());
   }

   updateLinkArticle(linkArticle, articleid: string){
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.put('http://localhost:3000/api/v1/linkarticle/'+ articleid, JSON.stringify(linkArticle), {headers: headers}).map(
       res => res.json());
   }

   deleteLinkArticle(id){
    return this.http.delete('http://localhost:3000/api/v1/linkarticle/remove/'+id).map(res => res.json());
   }


}
