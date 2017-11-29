import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VclistComponent } from './components/vclist/vclist.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ContactPersonComponent } from './components/project-form/contact-person/contact-person.component';
import { DealDescriptionComponent } from './components/project-form/deal-description/deal-description.component';
import { FormResultComponent } from './components/project-form/form-result/form-result.component';
import { WorkflowGuard }        from './services/workflow-guard.service';
import { WorkflowService }      from './services/workflow.service';

const appRoutes: Routes = [
  { 
    path: 'form_result', 
    component: FormResultComponent,
    canActivate: [WorkflowGuard]
  },
  { 
    path: 'contact_person', 
    component: ContactPersonComponent
  },
  { 
    path: 'deal_discription', 
    component: DealDescriptionComponent,
    canActivate: [WorkflowGuard]
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
    component: RegisterComponent
  },
  { 
    path: '**', 
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  providers: [ WorkflowGuard ],
  bootstrap: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
