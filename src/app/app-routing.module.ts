import { CalendarassistantComponent } from './assistantecomp/calendarassistant/calendarassistant.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AlimepatientComponent } from './patientcomponent/alimepatient/alimepatient.component';
import { computeDigest } from '@angular/compiler/src/i18n/digest';
import { DashboardassistantComponent } from './assistantecomp/dashboardassistant/dashboardassistant.component';
import { NotifpatientComponent } from './patientcomponent/notifpatient/notifpatient.component';
import { LoginComponent } from './login/login.component';
import { Component, NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { CalendarContent } from '@fullcalendar/angular';
import { Children } from 'preact/compat';
import { AssistanteComponent } from './assistante/assistante.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FicheAlimentComponent } from './components/fiche-aliment/fiche-aliment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ListePatientadComponent} from './administration/liste-patientad/liste-patientad.component'
import { ListeMedadComponent } from './administration/liste-medad/liste-medad.component';
import { ListeAssistadComponent } from './administration/liste-assistad/liste-assistad.component'
import { AdmindashboardComponent } from './administration/admindashboard/admindashboard.component';
import { DashboardpatientComponent } from './patientcomponent/dashboardpatient/dashboardpatient.component';
import { PatientComponent } from './assistantecomp/patient/patient.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [

  // {
  //    path: '', component: HomeComponent
  // },
  {
    path:'login',
    component: LoginComponent,
  },
   {
    path: 'patient',
     component: PatientsComponent,
    
   },

   {
     path: 'assistante',
   component: AssistanteComponent
 },
 {
   path: 'calendar',
   component: CalendarComponent
 },
 {
   path: 'fichealiment',
   component: FicheAlimentComponent
 },
 
 {
   path: 'listenutrisionistes',
   component: ListeMedadComponent
 },
 {
   path: 'listepatient',
   component: ListePatientadComponent
 },
 {
   path: 'listeassistantes',
   component: ListeAssistadComponent
 },
 {
   path:'dashboard',
   component: AdmindashboardComponent
  
 },
 {
    path:'dashboardassistant',
    component:DashboardassistantComponent
 },
 {
path: 'dashboarnutritionist',
component:NavbarComponent
 },
 {
path:'dashboardpatient',
component:DashboardpatientComponent
 },
 {
   path:'patients',
   component:PatientsComponent
   
 },
 {
path:'notificationpatient',
component:NotifpatientComponent
 },
 
 {
path:'listealiment',
component:AlimepatientComponent
 },
 {
path:'listepatientsassistante',
component:PatientComponent
 },
 {
   path:'calendarassistante',
   component:CalendarassistantComponent
 },
 {
   path:'assistantemed',
   component:AssistanteComponent
 },
 {
  path:'calendar',
  component:CalendarComponent
 },
 {path: 'fichealiment',
component:FicheAlimentComponent
},
{
  path:'notification',
  component:NotificationComponent
},
{ path: 'edit/:id', component:PatientEditComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }