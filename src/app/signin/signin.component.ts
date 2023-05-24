import { Component,  OnInit,  ViewChild } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})
export class SigninComponent implements OnInit{
  public visibility_icon = "visibility";
  public alert_msg = '';
  public alert_state = 'none'
  public signInForm:any;
  @ViewChild('password') passwordField:any;
  constructor( private fb:UntypedFormBuilder, public auth:AuthService){}
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email:"",
      password:""
    });
    this.auth.authMessageEmitter2.subscribe(
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
    this.auth.signIn(this.signInForm.value);
  }
}
