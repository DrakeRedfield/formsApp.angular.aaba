import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPersonTemplateForm } from 'src/app/shared/utils/interfaces/forms.interfaces';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {
  @ViewChild('peopleForm') peopleForm!: NgForm;

  person: IPersonTemplateForm = {
    gender: 'M',
    canReceiveNotifications: false,
    isAgreeTyC: false
  }

  isFieldValid( fieldName: string ): boolean {
    const field = this.peopleForm?.controls[fieldName];
    return field?.invalid && 
           field?.touched;
  }

  onSave(){
    console.log('Data Save Successfully', this.peopleForm.value);
    this.peopleForm.reset();
  }
}
