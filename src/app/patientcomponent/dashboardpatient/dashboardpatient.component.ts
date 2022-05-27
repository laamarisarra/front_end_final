import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboardpatient',
  templateUrl: './dashboardpatient.component.html',
  styleUrls: ['./dashboardpatient.component.css']
})
export class DashboardpatientComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("token")

    this.router.navigate(['/login'])
    if (localStorage.getItem("token")=== null){
      
    this.router.navigate(['/login'])
    }

  }
}
