import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

 

@Component({
  selector: 'app-detail-skill',
  templateUrl: './detail-skill.component.html',
  styleUrls: ['./detail-skill.component.scss']
})
export class DetailSkillComponent implements OnInit {
  id:any;
  itemList:AngularFireList<any>;
  itemArray=[];

  
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
  constructor(private activedRoute:ActivatedRoute,public db:AngularFireDatabase, ) {
    this.itemList=db.list('skill');
    this.itemList.snapshotChanges().subscribe(
      actions=>{
          actions.forEach(action=>{
           let y=action.payload.toJSON()
           y['$key']=action.key
           console.log("action: "+action.key);
           if(action.key===this.id['id']){
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

     console.log(this.itemArray);
   }


  ngOnInit() {
    this.activedRoute.params.subscribe(params=>{
    this.id=params;
      console.log(this.id['id']);
   

    })

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