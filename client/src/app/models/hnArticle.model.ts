export class HnArticle {
  public _id: string;
  public title: string;
  public description: string;
  public article: string;
  public imageLink: string;
  public likes: number;

  constructor(_id: string ,title: string, description: string,
              article: string, imageLink: string, likes:number){
    this._id = _id;
    this.title = title;
    this.description = description;
    this.article = article;
    this.imageLink = imageLink;
    this.likes = likes;
  }
}
