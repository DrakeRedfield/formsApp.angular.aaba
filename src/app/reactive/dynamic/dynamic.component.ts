import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DynamicFormFieldGroup } from 'src/app/shared/utils/dummy-data/template-forms.dummy';
import { ICallBackList, IFormArrayConfiguration, IFormField, IPersonTemplateForm, IPersonVideoGameForm } from 'src/app/shared/utils/interfaces/forms.interfaces';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {
  peopleForm: FormGroup = new FormGroup({});
  fieldsForm: IFormField[] = DynamicFormFieldGroup;
  newVideogame: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  // person: IPersonTemplateForm = {
  //   name: 'Drake Redfield',
  //   favoritesVideoGame: [
  //     {
  //       id: 1,
  //       name: 'Uncharted'
  //     },
  //     {
  //       id: 2,
  //       name: 'Fortnite'
  //     }
  //   ]
  // }

  get favoritesGames(): FormArray {
    return this.peopleForm.get('favoriteVideoGame') as FormArray;
  } 

  constructor(){
    this.fieldsForm.forEach( field => {
      if(field.formListConfiguration){
        this.peopleForm.addControl(field.name,this.getFormArray(field.formListConfiguration, field));
      }
      this.peopleForm.addControl(field.name,new FormControl('', this.getValidators(field)));
    });
  }

  getFormArray(config: IFormArrayConfiguration[],field: IFormField): FormArray{
    const controlsList: any[] = []
    const formArray = new FormArray([],this.getValidators(field))
    config.forEach( arrayField => {
      formArray.push(new FormControl(arrayField.defaultValue,arrayField.validators, arrayField.asyncValidators));
    })
    return formArray;
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

  addVideoGame() {
    if(this.newVideogame.invalid){
      return;
    }

    this.favoritesGames.push(new FormControl(this.newVideogame.value,[Validators.required, Validators.maxLength(3)]));
    this.newVideogame.reset();
  }

  removeVideoGame( index: number ) {
    this.favoritesGames.removeAt(index);
    return;
  }

  isFieldValid( fieldName: string ): boolean | null {
    const field = this.peopleForm?.controls[fieldName];
    return field?.errors && 
           field?.touched;
  }

  save(){
    if(this.peopleForm.invalid){
      this.peopleForm.markAllAsTouched();
      return;
    }

    console.log(this.peopleForm.value);
  }
}
