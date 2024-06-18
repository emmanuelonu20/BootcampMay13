import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { avoidWord, prohibited } from '../../custom-validation';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrl: './studentform.component.css'
})
export class StudentformComponent {

  //setup form group and form controls

  studentForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.studentForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3), avoidWord, prohibited(/jay/), prohibited(/kushan/)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['']
    });
  }

  onSubmit(){
    console.log(this.studentForm.value);
  }

  //Getters

  //Return the name form control
  get nameFormControl(){
    return this.studentForm.get('name')!;
  }

  //Return the email form control
  get emailFormControl(){
    return this.studentForm.get('email')!;
  }

  //Return the country form control
  get countryFormControl(){
    return this.studentForm.get('country')!;
  }

}
