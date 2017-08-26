import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLinkArticleComponent } from './new-link-article.component';

describe('NewLinkArticleComponent', () => {
  let component: NewLinkArticleComponent;
  let fixture: ComponentFixture<NewLinkArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLinkArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLinkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
