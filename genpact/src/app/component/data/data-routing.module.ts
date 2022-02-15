import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';

const routes: Routes = [
  {
    path: 'data_view',
    component: DataViewComponent,
    data: {
      title: 'Potential Recovery',
      headerDisplay: "none"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
