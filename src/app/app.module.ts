import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './books/add/add.component';
import { DeleteComponent } from './books/delete/delete.component';
import { DetailComponent } from './books/detail/detail.component';
import { EditComponent } from './books/edit/edit.component';
import { HomeComponent } from './books/home/home.component';
import { ListComponent } from './books/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    DetailComponent,
    EditComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
