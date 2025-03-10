import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceCenterComponent } from './update-service-center.component';

describe('UpdateServiceCenterComponent', () => {
  let component: UpdateServiceCenterComponent;
  let fixture: ComponentFixture<UpdateServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateServiceCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
