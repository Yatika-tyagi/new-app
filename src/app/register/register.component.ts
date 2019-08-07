import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUp: FormGroup;
  constructor(private router: Router,
    private heroService: HeroService) {
          this.signUp = new FormGroup ({
            name: new FormControl(''),
            contact: new FormControl(''),
            gender: new FormControl(''),
            email: new FormControl(''),
            password: new FormControl(''),
            address: new FormGroup({
              street: new FormControl(''),
              city: new FormControl(''),
              state: new FormControl(''),
              country: new FormControl('')
            })
          })
        }

  ngOnInit() {
    this.setCountry();
  }
  setCountry() {
    this.signUp.get('address').get('country').setValue('India');
  }
  onsubmit() {
    console.log('******', this.signUp.value);
    this.router.navigate(['/home']);
  };

}
