import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestThreeComponent } from './test-three.component';

describe('TestThreeComponent', () => {
  let component: TestThreeComponent;
  let fixture: ComponentFixture<TestThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestThreeComponent ],
      imports:[FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Test Case 1: Testing the number of elements rendered in UI are equals to the form controls defined in the reactive form.
  it('Test a form group element count',()=>{
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(2);
  });

  //Test Case 2: Testing the initial reactive form values
  it('CHECK INITIAL FORM VALUES FOR LOGIN FROM GROUP',()=>{
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      username:'',
      password:''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  //Test Case 3: Testing username value and validation before entering values in HTML
  it('CHECK USERNAME VALUE before ENTERING SOME Value and validations',()=>{
    const loginFormUserElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];
    const userNameValueFormGroup = component.loginForm.get('username')!;
    expect(loginFormUserElement.value).toEqual(userNameValueFormGroup.value);
    expect(userNameValueFormGroup.errors).not.toBeNull();
    expect(userNameValueFormGroup.errors?.required).toBeTruthy();
  });

  //Test Case 4: Testing username value after entering the value in HTML element
  it('CHECK USERNAME VALUE AFTER ENTERING SOME VALUE AND VALIDATIONS',()=>{
    const loginFormUserElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];
    loginFormUserElement.value = 'sample@gmail.com';
    loginFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const userNameValueFormGroup = component.loginForm.get('username')!;
      expect(loginFormUserElement.value).toEqual(userNameValueFormGroup.value);
      expect(userNameValueFormGroup.errors).toBeNull();

    });
  });

  //Test Case 5: Testing whole login form to be valid
  it('CHECK LOGIN FORM IS VALID WHEN VALIDATIONS ARE FULFILLED',()=>{
    const loginFormUserElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];
    const loginFormPasswordElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[1];
    loginFormUserElement.value = 'sameera@gmail.com';
    loginFormPasswordElement.value = '123456789';
    loginFormUserElement.dispatchEvent(new Event('input'));
    loginFormPasswordElement.dispatchEvent(new Event('input'));
    const isLoginFormValid = component.loginForm.valid;
    fixture.whenStable().then(()=>{
      expect(isLoginFormValid).toBeTruthy();
    });
  });
});
