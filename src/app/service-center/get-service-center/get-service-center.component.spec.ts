import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServiceCenterComponent } from './get-service-center.component';

describe('GetServiceCenterComponent', () => {
  let component: GetServiceCenterComponent;
  let fixture: ComponentFixture<GetServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetServiceCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
