import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../data.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
  providers : [DataTransferService]
})
export class PersonalDetailsComponent implements OnInit {
  qualificationInfo: FormGroup;
  graduation = [{'id':1, 'name':'B.tec/BE'}, {'id':2, 'name': 'BCA'}, {'id':3, 'name': 'B.com'},
  {'id':4, 'name': 'Bsc/IT'}];
  postGraduation = [{'id':1, 'name':'M.tech'}, {'id':2, 'name': 'MCA'}, {'id':3, 'name': 'M.com'},
  {'id':4, 'name': 'Msc/IT'}];
  title: string;
  constructor(private router: Router,
    private dataService: DataTransferService) {
    this.qualificationInfo = new FormGroup ({
      tenthper: new FormControl('', Validators.required),
      twelfth: new FormControl('', Validators.required),
      graduation: new FormControl('', Validators.required),
      gradper: new FormControl(''),
      postgraduation: new FormControl(''),
      pgper: new FormControl('', Validators.required),
    })
   }
  onSubmit() {
    console.log("&&&", this.qualificationInfo.value)
    this.router.navigate(['/personalDetails/familydetails']);
  }

  getItems(){
    this.dataService.setItem("apple");
    console.log(this.dataService.setItem("apple"))
    // this.router.navigate(['/editreceipt']);
   }
  // get data():string { 
  //   return this.dataService.newName; 
  // } 
  // set data(value: string) { 
  //   this.dataService.newName = value; 
  // } 
  ngOnInit() {
    this.title = this.dataService.someMethod();
    // console.log("&&&", this.title);
  }

}
