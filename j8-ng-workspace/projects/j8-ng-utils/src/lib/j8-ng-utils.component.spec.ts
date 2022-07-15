import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J8NgUtilsComponent } from './j8-ng-utils.component';

describe('J8NgUtilsComponent', () => {
  let component: J8NgUtilsComponent;
  let fixture: ComponentFixture<J8NgUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ J8NgUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(J8NgUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
