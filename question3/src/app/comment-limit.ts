import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minimumWords(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const comment: string = control.value;

    if (!comment) return null;

    const estValide: boolean = comment.split(' ').length >= min;

    return estValide ? null : { minimumWords: true };
  };
}
