import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VclistComponent } from './components/vclist/vclist.component';
import { VclistService } from './services/vclist.service';
import { FormService } from './services/form.service';
import { WorkflowService } from './services/workflow.service';
import { VcfilterPipe } from './vcfilter.pipe';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ContactPersonComponent } from './components/project-form/contact-person/contact-person.component';
import { DealDescriptionComponent } from './components/project-form/deal-description/deal-description.component';
import { FormResultComponent } from './components/project-form/form-result/form-result.component';

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
    FormResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [VclistService, AuthService, FormService,
              { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
