import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  newName: string;
  // message: string;
  constructor() { }

  someMethod() {
    return 'Please Fill Your Qualification Details!';
  }

  setItem(name:string){
    this.newName = name;
   console.log("Set Item called name = "+this.newName);

 }
}
