import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPersonTemplateForm } from 'src/app/shared/utils/interfaces/forms.interfaces';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  peopleForm = this.formBuilder.group({
    gender: ['M', Validators.required],
    canReceiveNotifications: [false, Validators.required],
    isAgreeTyC: [true, Validators.requiredTrue]
  });

  person: IPersonTemplateForm = {
    gender: 'M',
    canReceiveNotifications: false
  }

  ngOnInit(): void {
      this.peopleForm.setValue({
        ...this.person,
        isAgreeTyC: true
      });
  }

  constructor( private formBuilder: FormBuilder ) { }

  save() {
    if(!this.peopleForm.get('isAgreeTyC')?.value){
      return;
    }

    const personValue = {...this.peopleForm.value}
    delete personValue.isAgreeTyC;

    console.log('Form Values: ', personValue);
  }

}
