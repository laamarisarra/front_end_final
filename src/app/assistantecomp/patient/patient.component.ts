import { Component, OnInit } from '@angular/core';
import {ListepatiadService} from '../../service/listepatiad.service';
import { Patient } from '../../patient';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients:any;
  patient = new Patient();
  constructor( private listepatiadService:ListepatiadService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getpatiadData()
  }
  
  getpatiadData(){
    this.listepatiadService.getpatiadData().subscribe(res => {
      this.patients = res;
  });

  }
  insertpatiadData(){
    this.listepatiadService.createpatiad(this.patient).subscribe(res =>{
      this.getpatiadData();
      this.toast.success({detail:"Success Message",summary:"patient has been added",duration:5000})
    });
    }
    deletepatiadData(id:any){
      this.listepatiadService.deletepatiad(id).subscribe(res => {
        this.getpatiadData();
        this.toast.success({detail:"Success Message",summary:"patient has been deleted",duration:5000})
      })
     }  
}
