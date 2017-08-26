export class LinkArticle {
  public _id: string;
  public title: string;
  public description: string;
  public link: string;
  public likes: number;

  constructor(_id : string, title: string, description: string, link:string, likes:number){
    this._id = _id;
    this.title = title;
    this.description = description;
    this.link = link;
    this.likes = likes;
  }

}
