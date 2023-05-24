import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }

  createNewPackage(form:any){
    const url = 'http://api.cloudforte.ng/v1/package/add';
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
