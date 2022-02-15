import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
  {
    path: 'assign',
    loadChildren: () =>
      import('../../component/audit/assign/assign.module').then(
        (m) => m.AssignModule
      ),
  },
  {
    path: 'manage_pr',
    loadChildren: () =>
      import(
        '../../component/audit/manage-pr/manage-pr.module'
      ).then((m) => m.ManagePrModule),
  },
  {
    path: 'claim',
    loadChildren: () =>
      import(
        '../../component/claim/claim.module'
      ).then((m) => m.ClaimModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import(
        '../../component/reports/reports.module'
      ).then((m) => m.ReportsModule),
  },
  {
    path: 'data',
    loadChildren: () =>
      import(
        '../../component/data/data.module'
      ).then((m) => m.DataModule),
  },
];
