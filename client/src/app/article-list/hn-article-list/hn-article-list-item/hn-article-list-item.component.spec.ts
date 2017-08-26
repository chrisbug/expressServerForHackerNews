import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HnArticleListItemComponent } from './hn-article-list-item.component';

describe('HnArticleListItemComponent', () => {
  let component: HnArticleListItemComponent;
  let fixture: ComponentFixture<HnArticleListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HnArticleListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HnArticleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
