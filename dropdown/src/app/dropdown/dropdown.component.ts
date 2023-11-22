import { Component } from '@angular/core';
import { fruitsname } from '../users';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  public filterFruits: any[] = [];
  public isDropdownDisabled: boolean = false;
  enableCheckbox = true;
  creatForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.creatForm = this.fb.group({
      name: [null],
      price: [null],
      date:[null],
      color:[null],
      male:[false],
      female:[false]
    });
  }

  ngOnInit() {
    this.filterFruits = fruitsname
    console.log(this.filterFruits, "filterfruits")
    
   
  }
  submittedValues() {
    console.log(this.creatForm.value)
    
  }

  handelOptions() {
    console.log(this.creatForm)
    if(this.creatForm.value.firstDropdown=='orange' || this.creatForm.value.firstDropdown=='grapes'){
      this.isDropdownDisabled=true;
      
    }
    else{
      this.isDropdownDisabled=false;
    } 
  }

}
