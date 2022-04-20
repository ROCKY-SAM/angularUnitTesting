import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-three',
  templateUrl: './test-three.component.html',
  styleUrls: ['./test-three.component.css']
})
export class TestThreeComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(){
    this.loginForm = this.formBuilder.group({
      username:['',Validators.compose([Validators.required])],
      password:['']
    });
  }

}
