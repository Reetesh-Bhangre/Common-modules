import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'common-lib-control-value-accessor-form',
  templateUrl: './control-value-accessor-form.component.html',
  styleUrls: ['./control-value-accessor-form.component.css'],
})
export class ControlValueAccessorFormComponent implements OnInit {
  public firstName: string = 'First Name';
  public lastName: string = 'Lirst Name';
  public emailId: string = 'Email Id';
  public mobileNumber: string = 'Mobile Number';

  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  onSubmit() {
    console.log('form here', this.form.value);
  }

  createForm() {
    return new FormGroup({
      fName: new FormControl('first'),
      lName: new FormControl('Last'),
      emailId: new FormControl('fl@email.com'),
      mobileNumber: new FormControl('9876543210'),
      sDate: new FormControl('2020-05-17'),
    });
  }
}
