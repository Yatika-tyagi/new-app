import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'personalDetails',
    component: ParentComponentComponent,
    children: [
      { path: 'qualification',
        component: PersonalDetailsComponent
      },
      { path: 'familydetails',
        component: FamilyDetailsComponent
        // redirectTo: 'overview', 
        // pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}