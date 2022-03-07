import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../utils/interfaces/menu.interfaces';
import { reactiveRoutes, templateRoutes } from './menu-options.dummy';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  templateRoutes: IMenuItem[] = templateRoutes;
  reactiveRoutes: IMenuItem[] = reactiveRoutes;

}
