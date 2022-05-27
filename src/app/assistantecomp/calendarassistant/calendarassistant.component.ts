import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { formatDate } from '@fullcalendar/angular';
import { Calendar} from 'src/app/calendar';
import { CalendarService } from '../../calendar.service';
import { CalendarOptions } from '@fullcalendar/angular'; 
let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
});
console.log(str);
@Component({
  selector: 'app-calendarassistant',
  templateUrl: './calendarassistant.component.html',
  styleUrls: ['./calendarassistant.component.css']
})
export class CalendarassistantComponent implements OnInit {
  x="";
  id=0;
  title:any;
  
  start:string;
  end:string;
  nom:string;
 prenom:string;
  dateDeb: Date;
  datFin: Date;
  calendars:Calendar[];
  addUtiliEnable = false;
  editUtiliEnable = false;

 calendar: Calendar= new Calendar();
 newCalendar: Calendar= new Calendar();
 calendarOptions: CalendarOptions;
  
  constructor(private calendarService:CalendarService ,private router: Router) { }

  ngOnInit(): void {
    this.getStartDate ()
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  getStartDate (){
    
    this.calendarService.getCalendarsList().subscribe(data =>{
       var events=[];
       
      this.calendars = data;
      for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        events[i]={id:data[i].id,title:data[i].nom, start:data[i].start, end:data[i].end, }
        this.calendarOptions= {
            initialView: 'dayGridMonth',
            dateClick: (
              this.getDate.bind(this)
              ),
            locale: 'fr', // bind is important!
            headerToolbar: {
              start: 'prev,next today',
              center: 'title',
              end: 'dayGridMonth,dayGridWeek'
            },
            editable: true,
            eventResizableFromStart: true,
            
            events: events,
            eventClick: this.editEvent.bind(this)
            
            
          }
          
          };
           
          
          
      })
        
  }
  getDate(arg){
    this.addEvent(arg.dateStr)
    return arg.dateStr;
  }
  addEvent(arg:any){
    
    this.addUtiliEnable = true;
  }
  close(){
    this.addUtiliEnable = false;
   this.editUtiliEnable= false;
  }
  
  onSubmit(){
    console.log(this.calendar);
    this.saveCalendar();
    this.calendarService.updateCalendar(this.id , this.newCalendar).subscribe( data => {
      // window.location.reload();
    }, error => console.log(error));
  }
  saveCalendar()
  {
    this.calendarService.createCalendar(this.calendar).subscribe( data =>{
       console.log(data)
       
       this.goToCalendarsList();
    },
   );
  }
  goToCalendarsList()
  {
    window.location.reload();

  }
  editEvent(id: number){
    this.id = JSON.parse(JSON.stringify(id)).event.id;
    console.log("id  "+this.id)
    this.editUtiliEnable =true
    this.calendarService.getCalendarById(this.id).subscribe(data =>{
      console.log(data)
      this.calendar = data;
      this.newCalendar= data;
    })
    
    
  }
  deleteCalendar(){
   
    console.log("sup ID "+this.id) 
    this.calendarService.deleteCalendar(this.id).subscribe(data=>{
      console.log(data);
      window.location.reload();
      
     
      })
    }

}
