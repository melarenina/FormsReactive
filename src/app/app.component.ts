import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl('female', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.signupForm)
  }

}
