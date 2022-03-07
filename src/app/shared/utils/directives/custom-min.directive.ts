import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CustomMinDirective,
            multi: true
        }
    ]
})
export class CustomMinDirective implements Validator {
    @Input() minlength: number = 0;
    @Input() type: string = 'number';

    validate(control: FormControl): ValidationErrors | null {
        if(this.type !== 'number'){
            return null;
        }

        return (
            Number(control.value) === NaN ||
            control.value < this.minlength ||
            control.value === ''
        )?
        {'minValue':true}:
        null;
    }
}