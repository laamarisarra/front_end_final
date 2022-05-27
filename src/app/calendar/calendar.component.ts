import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { formatDate } from '@fullcalendar/angular';
import { Calendar} from 'src/app/calendar';
import { CalendarService } from '../calendar.service';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { computeDigest } from '@angular/compiler/src/i18n/digest';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
});
console.log(str);
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
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
  
  // initialView: 'dayGridMonth',
  // dateClick: (
  //   this.getDate.bind(this)
  //   ),
  // locale: 'fr', // bind is important!
  // headerToolbar: {
  //   start: 'prev,next today',
  //   center: 'title',
  //   end: 'dayGridMonth,dayGridWeek'
  // },
  // editable: true,
  // eventResizableFromStart: true,
  
  //           eventClick: this.editEvent.bind(this)
  
    
  

 constructor(private calendarService:CalendarService ,private router: Router) { 
  
}
//  calendarOptions: CalendarOptions = {
//   initialView: 'dayGridMonth',
//             dateClick: (
//               this.getDate.bind(this)
//               ),
//             locale: 'fr', // bind is important!
//             headerToolbar: {
//               start: 'prev,next today',
//               center: 'title',
//               end: 'dayGridMonth,dayGridWeek'
//             },
//             editable: true,
//             eventResizableFromStart: true,
            
//             events: 
//             [
//               {title: this.getPatientTitle(),start:this.getPatientStart(),end:this.getPatientEnd()}
//             ]
// };

// getPatientTitle(){
// this.calendarService.getCalendarsList().subscribe(data =>{
//   // this.x=JSON.stringify(data)
//   this.x = JSON.parse(JSON.stringify(data))[0].nom;
//   console.log(this.x);
//   for (var i = 1; i < this.x.length; i++) {
   
//    this.title[i]=JSON.parse(JSON.stringify(data))[0].nom;
//    console.log("title"+this.title[i])
//   }

// })
// return this.x
// }
// getPatientStart(){
//   this.calendarService.getCalendarsList().subscribe(data =>{
//     this.start = JSON.parse(JSON.stringify(data))[0].start;
//     console.log(this.start)
   
  
//   })
//   return this.start
//   }

// getPatientEnd(){
//   this.calendarService.getCalendarsList().subscribe(data =>{
//     this.end = JSON.parse(JSON.stringify(data))[0].end;
//     console.log(this.end)
   
  
//   })
//   return this.end
//   }

 


 


 


  

  
  

 

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
  
  // getStartDate (){
  //   this.calendarService.getCalendarsList().subscribe(data =>{
  //     var events=[];
  //     var x = JSON.parse(JSON.stringify(data));
  //     console.log('sahh sahhh'+x)
  //      for (var i = 0; i < x.length; i++) {
  //        console.log(x[i])
  //         events[i]={id:x[i].id,title:x[i].title, start:x[i].start, end:x[i].end }
  //          };
  //          this.calendarOptions
  // }

  // )}
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

