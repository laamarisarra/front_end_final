import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';
import { ListeassistadService } from '../../service/listeassistad.service'
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-liste-assistad',
  templateUrl: './liste-assistad.component.html',
  styleUrls: ['./liste-assistad.component.css']
})
export class ListeAssistadComponent implements OnInit {
  patients:any;
  patient = new Patient();

  constructor(private listeassistadService:ListeassistadService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getassistanteData()
    
  }
  getassistanteData(){
    
    this.listeassistadService.getassistanteData().subscribe(res => {
      this.patients = res;
      
    });
  }
  insertAssistadData(){
    this.listeassistadService.createAssistad(this.patient).subscribe(res =>{
      this.getassistanteData();
      this.toast.success({detail:"Success Message",summary:"assistant has been added",duration:5000})
    });
    }

    deleteAssistadData(id:any){
      this.listeassistadService.deleteAssistad(id).subscribe(res => {
        this.getassistanteData();
        this.toast.success({detail:"Success Message",summary:"assistant has been deleted",duration:5000})
      })
     }   
  
     
     
    
 }

  
  


