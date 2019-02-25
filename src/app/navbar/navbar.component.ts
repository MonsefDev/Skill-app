import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:Observable<firebase.User>;
  private isLoogedIn:boolean=false;
  private email:string;

  constructor(public afAuth:AngularFireAuth,private myrouter:Router) {
   // this.user=afAuth.authState;

 
    // firebase.auth().onAuthStateChanged(function(user){
    //   if(user){
    //     this.isLoogedIn=true;
    //   }else{
    //     this.isLoogedIn=false;
    //     // this.myrouter.navigate['/login'];
    //   }
    // })

    let status=localStorage.getItem('isLoggedIn');
    console.log(status);
    if(status ==='true'){
      this.isLoogedIn=true;
    }
    else{
    this.isLoogedIn=false;
   }
  }
   LogOut(){
     this.afAuth.auth.signOut();
     this.isLoogedIn=false;
     localStorage.setItem('isLoogedIn','false');
     this.myrouter.navigate(['/login']);
     console.log("logout");
 

   }
  ngOnInit() {
  }

}
