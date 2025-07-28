import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAdvancedComponent } from './angular-advanced.component';

describe('AngularAdvancedComponent', () => {
  let component: AngularAdvancedComponent;
  let fixture: ComponentFixture<AngularAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAdvancedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
