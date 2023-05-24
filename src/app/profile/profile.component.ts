import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
interface User {
  id:number,
  company_id:any,
  email:string,
  first_name:string,
  last_name:string,
  phone_number:string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor( public auth:AuthService){}
  public user:User = {id:0,company_id:0,email:"",first_name:"",last_name:"",phone_number:""};

  ngOnInit(): void {
    this.auth.getUser()
  .subscribe(
    (result:any) =>{
     this.user = result},
  (error:any) =>{
    console.log(error);
  });
  }
}
