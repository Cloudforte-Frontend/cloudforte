import {  EventEmitter,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }
  public authMessageEmitter = new EventEmitter<any>();
  public authMessageEmitter2 = new EventEmitter<any>();

  regsister(form:any){
    const url = 'http://api.cloudforte.ng/v1/users/register';
    this.http.post(url,form)
    .subscribe(
      (result:any) =>{
       console.log(result);
       sessionStorage.setItem('cdf-token',JSON.stringify(result.token));
       this.authMessageEmitter.emit({state:'success',msg:result.message});
    },
    (error:any) =>{
      console.log(error);
      this.authMessageEmitter.emit({state:'error',msg:error.error.error});
    });
    }

    signIn(form:any){
      const url = 'http://api.cloudforte.ng/v1/users/login';
      this.http.post(url,form)
      .subscribe(
        (result:any) =>{
         console.log(result);
         sessionStorage.setItem('cdf-token',result.token);
         this.router.navigate(['/admin/dashboard'])
      },
      (error:any) =>{
        console.log(error);
        this.authMessageEmitter2.emit({state:'error',msg:error.error.message});
      });
    }

    getUser(){
      const url = 'http://api.cloudforte.ng/v1/users/profile';
      const myHeaders:any = {'Authorization': 'Bearer '+sessionStorage.getItem('cdf-token')};
      return this.http.get(url,{headers:myHeaders});
    }
}
