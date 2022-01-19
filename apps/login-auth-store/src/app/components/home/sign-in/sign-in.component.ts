import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'nx-project-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  form!: FormGroup;
  location!: Location;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [],
      email: [],
    });
  }
  submitForm() {
    console.log(this.form.getRawValue());
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}
