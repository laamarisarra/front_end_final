import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboardassistant',
  templateUrl: './dashboardassistant.component.html',
  styleUrls: ['./dashboardassistant.component.css']
})
export class DashboardassistantComponent implements OnInit {

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
