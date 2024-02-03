import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'forms';

  forms = new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required],),
    email: new FormControl('',[Validators.required,Validators.email]),
    dob: new FormControl(''),
    address:new FormArray([
      new FormControl('Address 1'),
     
    ])
  });
  getAddress(){
    return this.forms.get('address') as FormArray;
  }
  
  addAddress(){
    this.getAddress().push(new FormControl("Addr"))
  }
  removeAddress(index: number) {
    this.getAddress().removeAt(index);
  }

  handleSubmit() {
    console.log(this.forms.value);
    console.log(this.forms.valid);
    if(this.forms.invalid){
      window.alert('fill this forms')
    }
    
  }
}
