import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrenthComponent } from './password-strenth.component';

describe('PasswordStrenthComponent', () => {
  let component: PasswordStrenthComponent;
  let fixture: ComponentFixture<PasswordStrenthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrenthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
