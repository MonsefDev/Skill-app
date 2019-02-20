import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.scss']
})
export class MyskillComponent implements OnInit {

  itemList:AngularFireList<any>;
  itemArray=[];

  constructor(public db:AngularFireDatabase) 
  {
    this.itemList=db.list('skill');
    this.itemList.snapshotChanges().subscribe(
      actions=>{
          actions.forEach(action=>{
           let y=action.payload.toJSON()
           y['$key']=action.key
           this.itemArray.push(y as ListItemClass)
           
          })
      })

      console.log(this.itemArray);
   }
  ngOnInit() {
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