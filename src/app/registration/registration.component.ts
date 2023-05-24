import { Component, ViewChild, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AuthService]
})
export class RegistrationComponent implements OnInit{
constructor( private fb:UntypedFormBuilder, public auth:AuthService){}
public visibility_icon = "visibility";
public alert_msg = '';
public alert_state = 'none'
@ViewChild('password') passwordField:any;
public registrationForm:any;
ngOnInit(): void {
  this.registrationForm = this.fb.group({
    first_name:"",
    last_name:"",
    email:"",
    phone_number:"",
    password:""
  });
 this.auth.authMessageEmitter.subscribe(
  (result:any) =>{
    this.alert_state = result.state;
    this.alert_msg = result.msg;
});
}
toggle_visibility(){
  if( this.passwordField.nativeElement.type == "password"){
    this.passwordField.nativeElement.type = "text"
    this.visibility_icon = 'visibility_off';
    }
  else{
  this.passwordField.nativeElement.type = "password";
  this.visibility_icon = 'visibility';
  }
}

postForm(){
  // console.log();
  this.auth.regsister(this.registrationForm.value);
}
}
