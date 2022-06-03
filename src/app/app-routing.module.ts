import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password'
    }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      title: 'Forgot Password'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: "reports",
        loadChildren: () =>
          import("./views/reports/reports.module").then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: "sales",
        loadChildren: () =>
          import("./views/sales/sales.module").then(
            (m) => m.SalesModule
          ),
      },
      {
        path: "communication",
        loadChildren: () =>
          import("./views/communication/communication.module").then(
            (m) => m.CommunicationModule
          ),
      },
      {
        path: "purchases",
        loadChildren: () =>
          import("./views/purchases/purchases.module").then(
            (m) => m.PurchasesModule
          ),
      },
      {
        path: "company",
        loadChildren: () =>
          import("./views/company/company.module").then(
            (m) => m.CompanyModule
          ),
      },
      {
        path: "user",
        loadChildren: () =>
          import("./views/user/user.module").then(
            (m) => m.UserModule
          ),
      },
      {
        path: "roles",
        loadChildren: () =>
          import("./views/roles/roles.module").then(
            (m) => m.RolesModule
          ),
      },
      {
        path: "classification",
        loadChildren: () =>
          import("./views/classification/classification.module").then(
            (m) => m.ClassificationModule
          ),
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
