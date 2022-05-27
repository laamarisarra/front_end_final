import { AdmindashboardComponent } from './administration/admindashboard/admindashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HttpClientModule } from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { AssistanteComponent } from './assistante/assistante.component';
import { AssistanteEditComponent } from './assistante-edit/assistante-edit.component';
import { FicheAlimentComponent } from './components/fiche-aliment/fiche-aliment.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PatientComponent } from './assistantecomp/patient/patient.component';
import { AdministrationModule } from './administration/administration.module';

import { NgToastModule } from 'ng-angular-popup';
import { LoginComponent } from './login/login.component';
import { DashboardassistantComponent } from './assistantecomp/dashboardassistant/dashboardassistant.component';
import { DashboardpatientComponent } from './patientcomponent/dashboardpatient/dashboardpatient.component';
import { CalendarassistantComponent } from './assistantecomp/calendarassistant/calendarassistant.component';
import { HomeComponent } from './home/home.component';
   

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
const appRoutes: Routes = [

  


  //  {
  //     path:'', component:NavbarComponent
  // },
  // { path: 'edit/:id', component:PatientEditComponent, },

  // { path:'fichealiment', component:FicheAlimentComponent},

  // {path: 'assistante', component:AssistanteComponent},

  // {path: 'notification', component:NotificationComponent},

  // {path: 'patient', component:PatientsComponent}


   
]



@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
  NavbarComponent,
  PatientEditComponent,
  AssistanteComponent,
  AssistanteEditComponent,
  FicheAlimentComponent,
  CalendarComponent,
  NotificationComponent,
  PatientComponent,
  LoginComponent,
  DashboardassistantComponent,
  DashboardpatientComponent,
  CalendarassistantComponent,
  HomeComponent,
  
  
  


  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AdministrationModule,
    NgToastModule,
   
    
    
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FullCalendarModule, // register FullCalendar with you app
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
