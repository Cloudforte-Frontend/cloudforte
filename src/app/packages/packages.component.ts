import { Component, OnInit } from '@angular/core';
declare const M:any;
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit{
  ngOnInit(): void {
  this.script();
  }
script(){
  let new_package = document.getElementById('new-package');
  M.Modal.init(new_package);
}
}
