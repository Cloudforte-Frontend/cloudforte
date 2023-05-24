import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RouteCompenents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewPackageModalComponent } from './modals/new-package-modal/new-package-modal.component';
import { RecipientComponent } from './modals/recipient/recipient.component';
import { AddRecipientModalComponent } from './modals/add-recipient-modal/add-recipient-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteCompenents,
    NavbarComponent,
    NewPackageModalComponent,
    RecipientComponent,
    AddRecipientModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
