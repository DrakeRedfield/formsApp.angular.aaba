import { Component } from '@angular/core';
import { IPersonTemplateForm } from 'src/app/shared/utils/interfaces/forms.interfaces';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

  person: IPersonTemplateForm = {
    gender: 'M',
    canRecibeNotifications: false,
    isAgreeTyC: false
  }

  isFieldValid( fieldName: string ): boolean {
    // const field = this.peopleForm?.controls[fieldName];
    // return field?.invalid && 
    //        field?.touched;
    return true;
  }

}
