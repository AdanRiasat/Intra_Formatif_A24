import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function notCountainName(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const comment = control.get('comment');
    const name = control.get('name');

    if (!comment) return null;
    if (!name) return null;

    const estValide: boolean = !comment.value.includes(name.value);

    if (!estValide) {
      comment.setErrors({ ...comment.errors, notCountainName: true });
    } else {
      if (comment.errors) {
        const { notCountainName, ...others } = comment.errors;
        comment.setErrors(Object.keys(others).length ? others : null);
      }
    }

    return estValide ? null : { notCountainName: true };
  };
}
