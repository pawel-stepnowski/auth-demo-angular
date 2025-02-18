import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInViewComponent } from './sign-in-view.component';

describe('SignInViewComponent', () => {
  let component: SignInViewComponent;
  let fixture: ComponentFixture<SignInViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
