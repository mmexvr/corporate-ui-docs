import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Add  CUSTOM_ELEMENTS_SCHEMA to this row


import { AppComponent } from './app.component';
import { ContractComponent } from './contract/contract.component';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]   // Add this row to your project
})
export class AppModule { }
