import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipientService } from 'src/app/services/recipient.service';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css']
})
export class RecipientComponent implements OnInit{
@Output() getIDEvent = new EventEmitter<number>();
public recipients:any[] = [];
constructor(public rp:RecipientService){}

ngOnInit(): void {
this.rp.getRecipients()
.subscribe(
  (result:any) =>{
   console.log(result);
   this.recipients  = result.recipients;
},
(error:any) =>{
console.log(error);
});
}

setID(id:number){
this.getIDEvent.emit(id);
}
}
