import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserListsComponent } from './app-user-lists.component';

describe('AppUserListsComponent', () => {
  let component: AppUserListsComponent;
  let fixture: ComponentFixture<AppUserListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUserListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
