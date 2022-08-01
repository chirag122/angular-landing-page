import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAwardsComponent } from './our-awards.component';

describe('OurAwardsComponent', () => {
  let component: OurAwardsComponent;
  let fixture: ComponentFixture<OurAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
