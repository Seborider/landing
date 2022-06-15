import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeArticleListComponent } from './de-article-list.component';

describe('DeArticleListComponent', () => {
  let component: DeArticleListComponent;
  let fixture: ComponentFixture<DeArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeArticleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
