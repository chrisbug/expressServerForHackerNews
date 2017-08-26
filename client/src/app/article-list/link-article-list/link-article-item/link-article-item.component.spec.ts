import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkArticleItemComponent } from './link-article-item.component';

describe('LinkArticleItemComponent', () => {
  let component: LinkArticleItemComponent;
  let fixture: ComponentFixture<LinkArticleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkArticleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
