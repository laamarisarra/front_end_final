import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ListePatientadComponent } from './liste-patientad/liste-patientad.component';
import { ListeMedadComponent } from './liste-medad/liste-medad.component';
import { ListeAssistadComponent } from './liste-assistad/liste-assistad.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
 {
  path: 'listeassistantes' ,component:ListeAssistadComponent
 }


  
]

@NgModule({
  declarations: [
    AdmindashboardComponent,
    ListePatientadComponent,
    ListeMedadComponent,
    ListeAssistadComponent
    
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    
  ]
})
export class AdministrationModule { }
