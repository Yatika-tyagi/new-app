import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
 familyInfo: FormGroup;
 formArr : FormArray;
 relation = [{'id':1, 'name':'Mother'}, {'id':2, 'name': 'Father'}, {'id':3, 'name': 'Brother'},
  {'id':4, 'name': 'Sister'}, {'id':5, 'name': 'GrandFather'}, {'id':6, 'name': 'GrandMother'},];
  constructor(private router: Router,
    private fb: FormBuilder) { 
    this.familyInfo = this.fb.group ({
      // name: [''],
      // relation: [''],
      // gender: [''],
      // contact: [''],
      // qualification: [''],
      // occupation: [''],
      aliases: this.fb.array([
        this.fb.group(
          {
            name: this.fb.control(''),
            relation: this.fb.control(''),
            gender: this.fb.control(''),
            contact: this.fb.control(''),
            qualification: this.fb.control(''),
            occupation: this.fb.control(''),
          }
        )
      ])
    })
  }
  onSubmit() {
    if (this.familyInfo.valid) {
      console.log("@@@@", this.familyInfo.value);
      this.familyInfo.reset();
    }
  }
  addAlias() {
    const a = this.familyInfo.get('aliases') as FormArray;
    let fg = this.fb.group(
      {
        name: this.fb.control(''),
        relation: this.fb.control(''),
        gender: this.fb.control(''),
        contact: this.fb.control(''),
        qualification: this.fb.control(''),
        occupation: this.fb.control(''),
      }
    );
    a.push(fg);
    return a;
  }
  addForm() {
    this.addAlias();
  }
  ngOnInit() {
  }

}
