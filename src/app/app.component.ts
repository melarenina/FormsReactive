import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];

  // Creating the property that will contain our form, to create our form
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
        username: new FormControl(null),
        email: new FormControl(null),
        gender: new FormControl('female'),
    });
  }

  onSubmit(){
    console.log(this.signupForm)
  }

}
