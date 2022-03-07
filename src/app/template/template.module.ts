import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { BasicComponent } from './basic/basic.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from '../shared/utils/directives/custom-min.directive';


@NgModule({
  declarations: [
    SwitchesComponent,
    DynamicComponent,
    BasicComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
