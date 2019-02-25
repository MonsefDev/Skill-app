import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fire:AngularFireAuth,private router:Router) { }

  email:string="";
  password:string="";
  ngOnInit() {
  }
  
  Onlogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(user=>{
      console.log(this.email+' / '+this.password);
      localStorage.setItem('isLoggedIn','true');
      this.router.navigate(['/home']);
      
    })
  }
}
