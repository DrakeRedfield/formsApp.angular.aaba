import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DynamicFormFieldGroup } from 'src/app/shared/utils/dummy-data/template-forms.dummy';
import { ICallBackList, IFormField, IPersonTemplateForm, IPersonVideoGameForm } from 'src/app/shared/utils/interfaces/forms.interfaces';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {
  @ViewChild('peopleForm') peopleForm!: NgForm;
  fieldsForm: IFormField[] = DynamicFormFieldGroup;

  person: IPersonTemplateForm = {
    name: 'Drake Redfield',
    favoritesVideoGame: [
      {
        id: 1,
        name: 'Uncharted'
      },
      {
        id: 2,
        name: 'Fortnite'
      }
    ]
  }

  addVideoGame = (value: string) => {
    const newGame: IPersonVideoGameForm = {
      id: this.person.favoritesVideoGame!.length +1,
      name: value
    }

    this.person.favoritesVideoGame!.push({...newGame});
    return true;
  }

  removeVideoGame( index: number ) {
    this.person.favoritesVideoGame!.splice(index,1);
  }

  isFieldValid( fieldName: string ): boolean {
    const field = this.peopleForm?.controls[fieldName];
    return field?.invalid && 
           field?.touched;
  }

  onClickButton(name: string, event: any){
    const callbacksList:ICallBackList = {
      favoriteVideoGame: this.addVideoGame
    }
    const value = this.peopleForm?.controls[name].value;

    callbacksList[name](value);
  }

  onSave(){
    console.log('Data Save Successfully');
    this.peopleForm.reset();
  }

}
