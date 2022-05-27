import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  constructor(private http:HttpClient,private service:AuthService,private router:Router, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }


  checkToken(token): boolean{
    var valid
    const result = this.http.get('http://localhost:8000/api/checkToken/'+token)
     result.subscribe(data => {
      console.log(this.service.getUser(token)['roles'][0])
      
    })
    
    console.log("valid "+valid)
    return valid
    
  }
  submit() {
    var x=""
    var y=""
    this.http.post('http://localhost:8000/api/user/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(data => {
      console.log("donnee "+JSON.stringify(data))
      x=JSON.stringify(data)
      console.log(data["user"]["role"])
      console.log(this.service.getUser(data['access_token'].split('.')[0]))
      
      localStorage.setItem('token', data['access_token'])
      localStorage.setItem('email', data['email'])
      if ( data["user"]["role"] === 1){
        this.router.navigate(['/dashboard'])
     alert("you are signed in as an admin")
     
       
      }else if(data["user"]["role"] === 2){

  this.router.navigate(['/dashboarnutritionist'])
  alert("you are signed in as a nutritionist")
      }else if (data["user"]["role"] === 3){
        this.router.navigate(['/dashboardassistant'])
        alert("you are signed in as an assistant ")
      }else if (data["user"]["role"] === 4){
        this.router.navigate(['/dashboardpatient'])
        alert("you are signed in as a patient ")}
      
     
      // console.log("supppp "+JSON.parse(JSON.stringify(data)).token)

      
  //     x= JSON.parse(JSON.stringify(data)).token
  //     this.service.login(this.form.value.username,this.form.value.password)
    
    
  //  console.log("test1 "+JSON.stringify(this.service.getUser(x)).split(':')[3].split(',')[0].slice(7,8))
  //  y=JSON.stringify(this.service.getUser(x)).split(':')[3].split(',')[0].slice(7,8);
  //  console.log(y)
    },
    // err=> this.toast.error({detail:"Error Message",summary:"Email ou Mot de passe incorrect",duration:5000})
    );
  }

}
