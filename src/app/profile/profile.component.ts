import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interface/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor( public auth:AuthService){}
  public user:User = {id:0,company_id:0,email:"",first_name:"",last_name:"",phone_number:""};

  ngOnInit(): void {
  this.user =this.auth.getUser();
  }
}
