import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Patient } from 'src/app/patient';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Maladie } from 'src/app/maladie';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
patients:any;
maladies:any;
   maladie= new Maladie();
patient = new Patient();

  constructor(private dataService:DataService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getPatientsData();
   
  }

  getPatientsData(){
    this.dataService.getData().subscribe(res => {
      this.patients = res;
      
    });
  }
   insertData(){
     this.dataService.insertData(this.patient).subscribe(res =>{
       this.getPatientsData();
       this.toast.success({detail:"Success Message",summary:"assistant has been added",duration:5000})
     });
     
     
    
 }

  deleteData(id:any){
   this.dataService.deleteData(id).subscribe(res => {
     this.getPatientsData();
     this.toast.success({detail:"Success Message",summary:"user has been deleted",duration:5000})
   })
  }

}
 
