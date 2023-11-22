import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule, 
    DropdownModule,
    BrowserAnimationsModule ,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
