import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css'],  
})
export class FormPreviewComponent implements OnInit {
  dynamicForm!: FormGroup;

  formFields = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      options: [],
    },
    {
      id: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter your email',
      options: [],
    },
    {
      id: 'gender',
      label: 'Gender',
      type: 'radio',
      placeholder: '',
      options: ['Male', 'Female'],
    },
    {
      id: 'hobbies',
      label: 'Hobbies',
      type: 'checkbox',
      placeholder: '',
      options: ['Reading', 'Gaming', 'Traveling'],
    },
    {
      id: 'country',
      label: 'Country',
      type: 'dropdown',
      placeholder: '',
      options: ['India', 'USA', 'Canada'],
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({});
    this.formFields.forEach((field) => {
      const control = this.fb.control('', field.type === 'text' || field.type === 'email' ? Validators.required : null);
      this.dynamicForm.addControl(field.id, control);
    });
  }

  onSubmit(): void {
    console.log(this.dynamicForm.value);
    alert('Form submitted!');
  }
}
