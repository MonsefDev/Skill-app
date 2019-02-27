import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.scss']
})
export class AddskillComponent implements OnInit {


  // firstname:string="Moncif";
  // lastname:string="laaraj";
  // email:string="moncif@gmail.com";
  // skillname:string="Developer IT";
  // price:number=20000;
  // city:string="Casablanca";
  // phone:string="0610221025";
  // description:string="no description";

  data={
    firstname :"",
    lastname:"",
    email:"",
    skillname:"",
    price:"",
    city:"",
    phone:"",
    description:""
  }
  email:string='';
  uid:any;
  itemList:AngularFireList<any>;
  constructor(private fire:AngularFireAuth,private db:AngularFireDatabase,public router:Router,private tostar:ToastrService){
    this.itemList=db.list('skill');
  
  // this.fire.authState.subscribe(auth=>{
  //   if(auth){
  //     this.uid=auth.uid;
  //     console.log('uid: '+this.uid);
  //   }
  // })
  }

  ngOnInit() {
    let user=localStorage.getItem('email');
    this.uid=localStorage.getItem('uid');
    this.email=user;
    console.log('user is :'+user);
    console.log('uid is :'+this.uid);
  }

  insertSkill(){ 
    this.itemList.push({
      firstname :this.data.firstname,
      lastname:this.data.lastname,
      email:this.email,
      skillname:this.data.skillname,
      price:this.data.price,
      city:this.data.city,
      phone:this.data.phone,
      description:this.data.description,  
      uid:this.uid 
      
    });
    this.tostar.success('New SKill Added with successfully','EMP. patients')
    this.router.navigate(['/myskill']);
  }
}
