import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignCreateComponent } from './assign-create/assign-create.component';
import { AssignHistoryComponent } from './assign-history/assign-history.component';
import { AssignHomeComponent } from './assign-home/assign-home.component';
const routes: Routes = [

  {
    path: 'home',
    component: AssignHomeComponent,
    data: {
      title: 'Assign',
      headerDisplay: "none"
    }
  },
  {
    path: 'assign-create',
    component: AssignCreateComponent,
    data: {
      title: 'Assign Create',
      headerDisplay: "none"
    }
  },
  {
    path: 'assign-history',
    component: AssignHistoryComponent,
    data: {
      title: 'Assign History',
      headerDisplay: "none"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignRoutingModule { }
