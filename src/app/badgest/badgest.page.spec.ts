import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgestPage } from './badgest.page';

describe('BadgestPage', () => {
  let component: BadgestPage;
  let fixture: ComponentFixture<BadgestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
