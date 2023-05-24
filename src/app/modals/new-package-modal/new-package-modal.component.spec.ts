import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPackageModalComponent } from './new-package-modal.component';

describe('NewPackageModalComponent', () => {
  let component: NewPackageModalComponent;
  let fixture: ComponentFixture<NewPackageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPackageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPackageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
