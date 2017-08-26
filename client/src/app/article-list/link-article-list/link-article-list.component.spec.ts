import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkArticleListComponent } from './link-article-list.component';

describe('LinkArticleListComponent', () => {
  let component: LinkArticleListComponent;
  let fixture: ComponentFixture<LinkArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
