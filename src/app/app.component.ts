import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  forbiddenUsernames = ['Chris', 'Anna'];

  // Creating the property that will contain our form, to create our form
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
        userData: new FormGroup({
          username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
          email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
        }),
        gender: new FormControl('female', Validators.required),
        hobbies: new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.signupForm.setValue({
      userData: {
        username: 'Max',
        email: 'max@test.com'
      },
      gender: 'male',
      hobbies: []
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobbies(){
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }else{
      return null;
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable <any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        }else{
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

}
