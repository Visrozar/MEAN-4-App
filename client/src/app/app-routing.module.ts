import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VclistComponent } from './components/vclist/vclist.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { VcFormComponent } from './components/vc-form/vc-form.component';
import { ContactPersonComponent } from './components/project-form/contact-person/contact-person.component';
import { DealDescriptionComponent } from './components/project-form/deal-description/deal-description.component';
import { FormResultComponent } from './components/project-form/form-result/form-result.component';
import { WorkflowGuard } from './services/workflow-guard.service';
import { WorkflowService } from './services/workflow.service';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';

const appRoutes: Routes = [
  {
    path: 'project_details',
    component: ProjectDetailComponent
  },
  {
    path: 'vc_form',
    component: VcFormComponent
  },
  {
    path: 'project_form',
    component: ProjectFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vc_list',
    component: VclistComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [WorkflowGuard],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
