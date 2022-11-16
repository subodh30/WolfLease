import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterOwnerComponent } from './creater-owner.component';

describe('CreaterOwnerComponent', () => {
  let component: CreaterOwnerComponent;
  let fixture: ComponentFixture<CreaterOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaterOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
