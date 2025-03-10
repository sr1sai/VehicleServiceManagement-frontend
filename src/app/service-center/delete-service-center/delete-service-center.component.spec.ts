import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceCenterComponent } from './delete-service-center.component';

describe('DeleteServiceCenterComponent', () => {
  let component: DeleteServiceCenterComponent;
  let fixture: ComponentFixture<DeleteServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteServiceCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
