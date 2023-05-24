import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const M:any;
@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit{
public show_details = false;
constructor(private route:ActivatedRoute) { }
ngOnInit(): void {
const id = this.route.snapshot.params['id'];
if(id){
  this.show_details = true;
}
this.script();
}

  script(){
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
}

show_more(){
  if(! this.show_details){
  this.show_details = true;
  }
}
}
