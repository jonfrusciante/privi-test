import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SquadreComponent} from './squadre.component';
import {CreaComponent} from './crea/crea.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {path: 'squadre',
  component: SquadreComponent,
    children: [
      {
        path: 'crea',
        component: CreaComponent,
      },
      {
        path: 'lista',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
