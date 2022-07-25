import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHouseComponent } from './delete-house.component';

describe('DeleteHouseComponent', () => {
  let component: DeleteHouseComponent;
  let fixture: ComponentFixture<DeleteHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
