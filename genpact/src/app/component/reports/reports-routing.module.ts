import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsViewComponent } from './reports-view/reports-view.component';

const routes: Routes = [
  {
    path: 'reports_view',
    component: ReportsViewComponent,
    data: {
      title: 'Reports',
      headerDisplay: "none"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
