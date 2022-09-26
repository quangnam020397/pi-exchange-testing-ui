import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'new-enquiry',
        data: {
          title: 'Enquiry Monitoring',
          breadcrumb: 'Enquiry Monitoring',
        },
        // loadChildren: () =>
        //   import('./new-enquiry/new-enquiry.module').then(
        //     m => m.NewEnquiryModule
        //   ),
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
