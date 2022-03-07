import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFormField } from 'src/app/shared/utils/interfaces/forms.interfaces';
import { formFieldGroup } from '../../shared/utils/dummy-data/template-forms.dummy';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  @ViewChild('productForm') productForm!: NgForm;
  fieldsForm: IFormField[] = formFieldGroup;

  isFieldValid( fieldName: string ): boolean {
    const field = this.productForm?.controls[fieldName];
    return field?.invalid && 
           field?.touched;
  }

  onSave(){
    console.log('Data Save Successfully');
    this.productForm.reset();
  }

}
