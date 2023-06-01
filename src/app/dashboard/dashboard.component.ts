import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interface/user';
declare const M:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public user:User = {id:0,company_id:0,email:"",first_name:"",last_name:"",phone_number:""};
  public today = new Date();
  constructor(public auth:AuthService){}
ngOnInit(): void {
this.user = this.auth.getUser();
this.script();
}

script(){
  let trigger = document.getElementById('profile-trigger');
  M.Dropdown.init(trigger,{constrainWidth: false,coverTrigger:false,offsetTop:5});
}
}
