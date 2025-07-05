import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliSetupComponent } from './cli-setup.component';

describe('CliSetupComponent', () => {
  let component: CliSetupComponent;
  let fixture: ComponentFixture<CliSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
