import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";

export interface IFormField {
    placeHolder: string,
    type: string,
    text: string,
    name: string,
    isRequired?: boolean,
    minLength?: number,
    errorMessage?: string,
    validators?: ((data: any) => boolean)[],
    hasButton?:boolean,
    buttonText?: string
    minValue?: number,
    formListConfiguration?: IFormArrayConfiguration[]
}

export interface IFormArrayConfiguration {
    defaultValue?: string,
    validators?: ValidatorFn | ValidatorFn[],
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[]
}

export interface IFormControl {
    [key: string]: AbstractControl;
}

export interface ICallBackList {
    [key: string]: ((...params:any)=> any)
}

export interface IPersonTemplateForm {
    name?: string,
    favoritesVideoGame?: IPersonVideoGameForm[],
    gender?: string,
    isAgreeTyC?: boolean,
    canRecibeNotifications?: boolean
}

export interface IPersonVideoGameForm {
    id: number,
    name: string
}