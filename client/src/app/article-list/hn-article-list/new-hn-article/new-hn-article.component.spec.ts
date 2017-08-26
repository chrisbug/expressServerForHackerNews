import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHnArticleComponent } from './new-hn-article.component';

describe('NewHnArticleComponent', () => {
  let component: NewHnArticleComponent;
  let fixture: ComponentFixture<NewHnArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHnArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHnArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
