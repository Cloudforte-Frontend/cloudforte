import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  constructor(private http:HttpClient) { }

  getRecipients(){
  const url = 'http://api.cloudforte.ng/v1/packages/recipients';
  const myHeaders:any = {'Authorization': 'Bearer ' + sessionStorage.getItem('cdf-token'),'Content-Type':'application/json'};
  return this.http.post(url,{},{headers:myHeaders});
  }
  addRecipient(form:any){
  const url = 'http://api.cloudforte.ng/v1/packages/recipient/save ';
  const myHeaders:any = {'Authorization': 'Bearer ' + sessionStorage.getItem('cdf-token')};
  this.http.post(url,form,{headers:myHeaders})
  .subscribe(
    (result:any) =>{
     console.log(result);
  },
  (error:any) =>{
  console.log(error);
  });
  }
}
