import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestOneComponent } from './test-one.component';

describe('TestOneComponent', () => {
  let component: TestOneComponent;
  let fixture: ComponentFixture<TestOneComponent>;
  let debugElement : DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment and decrement value', ()=>{
    fixture.componentInstance.increment();
    expect(fixture.componentInstance.value).toEqual(1);

    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.value).toEqual(0);
  });

  it('should increment value in template',() =>{
    debugElement
    .query(By.css('button.increment'))
    .triggerEventHandler('click',null);

    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');
  });

  it('should stop at 0 and show minimum message',()=>{
    debugElement
    .query(By.css('button.decrement'))
    .triggerEventHandler('click',null);

    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;
    expect(fixture.componentInstance.value).toEqual(0);
    expect(message).toContain('Minimum');
  });



});
