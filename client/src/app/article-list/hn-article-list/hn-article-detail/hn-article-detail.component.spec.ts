import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HnArticleDetailComponent } from './hn-article-detail.component';

describe('HnArticleDetailComponent', () => {
  let component: HnArticleDetailComponent;
  let fixture: ComponentFixture<HnArticleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HnArticleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HnArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
