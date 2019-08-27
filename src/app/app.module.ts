import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DataTransferService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FamilyDetailsComponent,
    PersonalDetailsComponent,
    ParentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
