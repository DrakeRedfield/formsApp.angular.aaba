import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'basics',
        component: BasicComponent
      },
      {
        path:'dynamics',
        component: DynamicComponent
      },
      {
        path:'switches',
        component: SwitchesComponent
      },
      {
        path:'**',
        redirectTo: 'basics'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ReactiveRoutingModule { }
