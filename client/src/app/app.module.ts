import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VclistComponent } from './components/vclist/vclist.component';
import { VclistService } from './services/vclist.service';
import { FormService } from './services/form.service';
import { WorkflowService } from './services/workflow.service';
import { VcfilterPipe } from './pipes/vcfilter.pipe';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ContactPersonComponent } from './components/project-form/contact-person/contact-person.component';
import { DealDescriptionComponent } from './components/project-form/deal-description/deal-description.component';
import { FormResultComponent } from './components/project-form/form-result/form-result.component';
import { UploadFileService } from './services/upload-file.service';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { DashboardPipe } from './pipes/dashboard.pipe';
import { VcFormComponent } from './components/vc-form/vc-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VclistComponent,
    VcfilterPipe,
    RegisterComponent,
    ProjectFormComponent,
    ContactPersonComponent,
    DealDescriptionComponent,
    FormResultComponent,
    LoginComponent,
    DashboardComponent,
    ProjectDetailComponent,
    DashboardPipe,
    VcFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule
  ],
  providers: [VclistService, AuthService, AuthGuard, NotAuthGuard, FormService, UploadFileService,
    { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
