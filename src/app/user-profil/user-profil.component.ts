import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
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

  itemList:AngularFireList<any>;
  itemArray=[];
  email:string;
  myid:string;
 
   constructor(public db:AngularFireDatabase,private route:Router) 
  {

    
    this.email=localStorage.getItem('email');
    this.myid=localStorage.getItem('uid');
    console.log(this.email+' '+this.myid);

    this.itemList=db.list('users');
    this.itemList.snapshotChanges().subscribe(
      actions=>{
          actions.forEach(action=>{
           let y=action.payload.toJSON()
           y['$key']=action.key
           console.log(action.payload.child('uid'));
           if(action.payload.child('uid').val()===this.myid){
            this.itemArray.push(y as ListItemClass)
            this.data.firstname=this.itemArray[0]['firstname'];
            this.data.lastname=this.itemArray[0]['lastname'];
            this.data.email=this.itemArray[0]['email'];
            this.data.skillname=this.itemArray[0]['skillname'];
            this.data.price=this.itemArray[0]['price'];
            this.data.city=this.itemArray[0]['city'];
            this.data.description=this.itemArray[0]['skillname'];
         }
           
          })
      })

   }

  ngOnInit() {
    console.log(this.data);
  }

}


export class ListItemClass{
  $key: string
  firstname :string;
  lastname:string;
  email:string;
  skillname:string;
  price:string;
  city:string;
  phone:string;
  description:string;

}