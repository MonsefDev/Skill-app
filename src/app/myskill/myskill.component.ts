import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.scss']
})
export class MyskillComponent implements OnInit {

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


  constructor(public db:AngularFireDatabase,private route:Router) 
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

     // console.log(this.itemArray);
   }
  ngOnInit() {
  }


  onUpdate($key){
    this.itemArray.forEach(element => {
      if(element['$key']==$key){
        console.log(element['$key']);
        console.log('$key  selected '+$key)
        this.data.firstname =element['firstname'];
        this.data.lastname=element['lastname'];
        this.data.email=element['email'];
        this.data.skillname=element['skillname'];
        this.data.price=element['price'];
        this.data.city=element['city'];
        this.data.phone=element['phone'];
        this.data.description=element['description'];
      }
 
    });
  }
  onEdit($key:string){
    this.data.firstname  
    this.data.lastname 
    this.data.email 
    this.data.skillname 
    this.data.price 
    this.data.city 
    this.data.phone 
    this.data.description 

    console.log('$key on edit : '+$key);


    //console.log('onedit');
    /*console.log('key '+$key+'firstname '+ this.data.firstname +'lastname '+this.data.lastname+'price '+this.data.price);
    this.itemList.update($key,{
     firstname: this.data.firstname,
     lastname: this.data.lastname,
     email:this.data.email,
     skillname:this.data.skillname,
     price: this.data.price, 
     city: this.data.city, 
     phone:this.data.phone, 
     description: this.data.description 
    })*/
    this.itemList.set($key,{
      firstname :this.data.firstname,
      lastname:this.data.lastname,
      email:this.data.email,
      skillname:this.data.skillname,
      price:this.data.price,
      city:this.data.city,
      phone:this.data.phone,
      description:this.data.description
    });

    let a=document.getElementsByClassName('modal-backdrop fade show');
    a[0].classList.remove("modal-backdrop");   
    console.log('key '+$key+'firstname '+ this.data.firstname +'lastname '+this.data.lastname+'price '+this.data.price);
    this.itemArray=[];
    this.route.navigate['/myskill'];
   
  }

 

  onDelete($key:string){
    console.log('ondelete');
    this.itemList.remove($key);
    this.itemArray=[];
    console.log("removed");
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