import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { foodListComponent } from "../food-list/food-list.component";
import { foodFormComponent } from '../food-form/food-form.component';
import { foodDetailComponent } from '../food-detail/food-detail.component';
import { AuthGuard } from '../auth.guard';
import { LoginFormComponent } from '../login-form/login-form.component';
import { OrderComponentComponent } from '../order-component/order-component.component';
import { RegistrationComponent } from '../registration/registration.component';
import { DrinksComponent } from '../drinks/drinks.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/foods',
    pathMatch: 'full'
  },
  {
    path: 'foods',
    component: foodListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'foods/add',
    component: foodFormComponent
  },
  {
    path: 'foods/:id',
    component: foodDetailComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'order',
    component: OrderComponentComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'drinks',
    component: DrinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }