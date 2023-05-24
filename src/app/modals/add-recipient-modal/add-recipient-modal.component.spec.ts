import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipientModalComponent } from './add-recipient-modal.component';

describe('AddRecipientModalComponent', () => {
  let component: AddRecipientModalComponent;
  let fixture: ComponentFixture<AddRecipientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipientModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
