import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClaimComponent } from './create-claim/create-claim.component';

const routes: Routes = [
  {
    path: 'create_claim',
    component: CreateClaimComponent,
    data: {
      title: 'Create Claim',
      headerDisplay: "none"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }
