import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/patient';
import { DataService } from 'src/app/service/data.service';
import { DataassistanteService } from 'src/app/service/dataassistante.service';


@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
 id:any;
 data:any;
 patient = new Patient();
  constructor(private route:ActivatedRoute,private dataService:DataService, private dataassistante:DataassistanteService ) { }

  ngOnInit(): void {
     console.log(this.route.snapshot.params['id']);
     this.id = this.route.snapshot.params['id'];
     this.getData();
  }
   getData(){
     this.dataService.getPatientById(this.id).subscribe(
       res => {
      console.log(res);
      this.data= res;
      this.patient = this.data;
     })

}
updatePatient(){
  this.dataService.updateData(this.id,this.patient).subscribe(
    res => {
  
  });
}

}
