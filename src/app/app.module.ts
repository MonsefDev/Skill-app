import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { AddskillComponent } from './addskill/addskill.component';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyskillComponent } from './myskill/myskill.component';
import { AllskillsComponent } from './allskills/allskills.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { DetailSkillComponent } from './detail-skill/detail-skill.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
 
const routes: Routes = [
  { path:"", redirectTo:'home', pathMatch:'full' },
  { path:"home", component:SliderComponent },
  { path:"addskill", component:AddskillComponent },
  { path:"login", component:LoginComponent },
  { path:"register", component:RegisterComponent },
  { path:"myskill", component:MyskillComponent },
  { path:"allskill", component:AllskillsComponent },
  { path:"details/:id", component:DetailSkillComponent },
  { path:"profil", component:UserProfilComponent },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AddskillComponent,
    RegisterComponent,
    LoginComponent,
    MyskillComponent,
    AllskillsComponent,
    DetailSkillComponent,
    UserProfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CommonModule,
    AngularFireStorageModule,
    ToastrModule.forRoot()
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
