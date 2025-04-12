import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { FormService } from '../../services/form.service';
import { FormField } from '../../models/field.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  fieldForm: FormGroup;
  types = ['text', 'textarea', 'dropdown', 'checkbox', 'radio'];

  constructor(private fb: FormBuilder, public formService: FormService) {
    this.fieldForm = this.fb.group({
      label: ['', Validators.required],
      type: ['text', Validators.required],
      placeholder: [''],
      options: [''],
      required: [false]
    });
  }

  addField() {
    if (this.fieldForm.valid) {
      const field: FormField = {
        id: uuidv4(),
        label: this.fieldForm.value.label,
        type: this.fieldForm.value.type,
        placeholder: this.fieldForm.value.placeholder,
        options: ['dropdown', 'checkbox', 'radio'].includes(this.fieldForm.value.type)
          ? this.fieldForm.value.options.split(',').map((o: string) => o.trim())
          : undefined,
        required: this.fieldForm.value.required
      };
      this.formService.addField(field);
      this.fieldForm.reset({ type: 'text', required: false });
    }
  }

  removeField(id: string) {
    this.formService.removeField(id);
  }
}
