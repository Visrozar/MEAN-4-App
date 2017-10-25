import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VclistComponent } from './components/vclist/vclist.component';

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
    path: '*', 
    component: HomeComponent
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
