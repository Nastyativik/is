export interface IProps {
  layout?: 'primary' | 'secondary';
  modelValue?: string;
  isDisablead?: boolean;
  placeholder?: string;
  options?: string[];
  label?: string;
  type?: 'button' | 'submit';
}

export interface IEmit {
  (e: 'update:modelValue', value: string): void;
  (e: 'click'): void;
}