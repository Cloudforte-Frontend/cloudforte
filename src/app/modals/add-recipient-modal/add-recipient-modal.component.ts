import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecipientService } from 'src/app/services/recipient.service';
@Component({
  selector: 'app-add-recipient-modal',
  templateUrl: './add-recipient-modal.component.html',
  styleUrls: ['./add-recipient-modal.component.css']
})
export class AddRecipientModalComponent implements OnInit{
public rpForm:any={};
constructor(public fb:FormBuilder, private rsp:RecipientService){}
ngOnInit(): void {
this.rpForm =  this.fb.group({
    first_name:"",
    last_name:"",
    email:"",
    phone_number:"",
    address:"",
    city:"",
    state:"",
    zip_code:""
  });
}
post(){
  if (Object.keys(this.rpForm.value).length === 0) {
    console.log('Form is empty');
  } else {
    // this.rsp.addRecipient(this.rpForm.value);
    // this.rpForm.reset();
    console.log('Form is not empty');
  }

}
}
