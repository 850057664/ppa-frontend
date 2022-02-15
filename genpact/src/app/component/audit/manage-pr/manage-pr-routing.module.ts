import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PotentialRecoveryComponent } from './potential-recovery/potential-recovery.component';

const routes: Routes = [
  {
    path: 'potential_recovery',
    component: PotentialRecoveryComponent,
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
export class ManagePrRoutingModule { }
