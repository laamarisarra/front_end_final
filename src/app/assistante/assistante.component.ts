import { Component, OnInit } from '@angular/core';
import { DataassistanteService } from '../service/dataassistante.service';
import { Patient } from '../patient';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-assistante',
  templateUrl: './assistante.component.html',
  styleUrls: ['./assistante.component.css']
})
export class AssistanteComponent implements OnInit {
  patients:any;

   
patient = new Patient();

  constructor(private dataassistanteService:DataassistanteService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getAssistantesData()
    
  }
  getAssistantesData(){
    
    this.dataassistanteService.getAssistantesData().subscribe(res => {
      this.patients = res;
      
    });
  }
   insertAssistantesData(){
     this.dataassistanteService.insertAssistantesData(this.patient).subscribe(res =>{
       this.getAssistantesData();
       this.toast.success({detail:"Success Message",summary:"assistant has been added",duration:5000})
       
     });
     
     
    
 }

  deleteAssistantesData(id:any){
   this.dataassistanteService.deleteAssistantesData(id).subscribe(res => {
     this.getAssistantesData();
     this.toast.success({detail:"Success Message",summary:"assistant has been deleted",duration:5000})
   })
  }

}
 
  

