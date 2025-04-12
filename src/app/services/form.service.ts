import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormField } from '../models/field.model';

@Injectable({ providedIn: 'root' })
export class FormService {
  private fieldsSubject = new BehaviorSubject<FormField[]>([]);
  fields$ = this.fieldsSubject.asObservable();

  getFields(): FormField[] {
    return this.fieldsSubject.getValue();
  }

  addField(field: FormField): void {
    this.fieldsSubject.next([...this.getFields(), field]);
  }

  removeField(id: string): void {
    this.fieldsSubject.next(this.getFields().filter(f => f.id !== id));
  }

  clearFields(): void {
    this.fieldsSubject.next([]);
  }
}
