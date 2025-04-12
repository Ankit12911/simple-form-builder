export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'dropdown' | 'checkbox' | 'radio';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}
