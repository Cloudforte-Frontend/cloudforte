import { AfterViewInit, Component} from '@angular/core';
declare const M:any
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit{

ngAfterViewInit(): void {
  this.script();
}
script(){
  let mobile_nav = document.getElementById('mobile-nav');
  M.Sidenav.init(mobile_nav);
  }
}
