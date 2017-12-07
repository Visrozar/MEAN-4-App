import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VclistComponent } from './components/vclist/vclist.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';

const appRoutes: Routes = [
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
  imports: [ RouterModule.forRoot(appRoutes) ],
  providers: [],
  bootstrap: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
