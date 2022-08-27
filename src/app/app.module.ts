import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarModelFactory } from './model/car';
import { CarService } from './car-service/car.service';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    CarListComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CarModelFactory,
    CarService,
    // i18n (internationalization) (wybór języka na UI)
    // {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
