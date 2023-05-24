import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PackageService } from 'src/app/services/package.service';
import { RecipientService } from 'src/app/services/recipient.service';
declare const M:any;
@Component({
  selector: 'app-new-package-modal',
  templateUrl: './new-package-modal.component.html',
  styleUrls: ['./new-package-modal.component.css']
})
export class NewPackageModalComponent implements OnInit{
public newPackageForm:any;
constructor(public fb:FormBuilder, private PK:PackageService,public rsp:RecipientService){}

ngOnInit(): void {
this.script();
this.newPackageForm = this.fb.group({
  name:"",
  description:"",
  weight:"",
  recipient_id:0
});
}

post(){
this.PK.createNewPackage(this.newPackageForm.value);
}

script(){
  let rp_trigger = document.getElementById('rp-trigger');
  let add_recipient_modal =  document.getElementById('add-recipient-modal');
  M.Dropdown.init(rp_trigger,{ constrainWidth:false,coverTrigger:false});
  M.Modal.init(add_recipient_modal,{overlayOpacity:0});
}

setRecipientID(id:any){
this.newPackageForm.value.recipient_id = id;
console.log(id);
}
}
