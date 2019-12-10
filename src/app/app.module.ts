import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule, MatButtonToggleModule, MatIconModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { foodListComponent } from './food-list/food-list.component';
import { foodFormComponent } from './food-form/food-form.component';
import { foodDetailComponent } from './food-detail/food-detail.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { RoutingModule } from './routing/routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { RegistrationComponent } from './registration/registration.component';
import { DrinksComponent } from './drinks/drinks.component';
import { drinkFormComponent } from './drink-form/drink-form.component';

@NgModule({
  declarations: [
    AppComponent,
    foodListComponent,
    foodFormComponent,
    foodDetailComponent,
    StatusFilterComponent,
    LoginFormComponent,
    OrderComponentComponent,
    RegistrationComponent,
    DrinksComponent,
    drinkFormComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    RoutingModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
