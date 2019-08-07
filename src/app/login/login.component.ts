import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router) { 
    this.login= this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  onSubmit() {
    console.log(this.login.value, "########");
    this.router.navigate(['/personalDetails/qualification']);
  }
  ngOnInit() {
  }
 
}
