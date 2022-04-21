import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { formFieldGroup } from 'src/app/shared/utils/dummy-data/template-forms.dummy';
import { IFormField } from 'src/app/shared/utils/interfaces/forms.interfaces';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  productForm = new FormGroup({});
  fieldsForm: IFormField[] = formFieldGroup;

  constructor(){
    this.fieldsForm.forEach( field => {
      this.productForm.addControl(field.name,new FormControl('', this.getValidators(field)));
    });
  }

  getValidators( formField: IFormField ): ValidatorFn[] {
    const validators: ValidatorFn[] = []
    if( formField.isRequired ){
      validators.push(Validators.required);
    }
    if ( formField.minLength ) {
      validators.push(Validators.minLength(formField.minLength));
    }
    if ( formField.minValue ) {
      validators.push(Validators.min(formField.minValue));
    }
    return validators;
  }

  isFieldValid( fieldName: string ): boolean | null {
    const field = this.productForm?.controls[fieldName];
    return field?.errors && 
           field?.touched;
  }

  save() {
    if(this.productForm.invalid){
      this.productForm.markAllAsTouched();
      return;
    }

    this.productForm.reset();
  }

}
