import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HnArticleListComponent } from './hn-article-list.component';

describe('HnArticleListComponent', () => {
  let component: HnArticleListComponent;
  let fixture: ComponentFixture<HnArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HnArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HnArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
