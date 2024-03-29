import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsListComponent } from './bugs-list/bugs-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AddComponentComponent } from './add-component/add-component.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [BugsListComponent, AddComponentComponent, EditComponent],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
  ],
  exports: [
    BugsListComponent,
    MatSortModule,
    MatTableModule,
    MatSortModule,
    MatSortModule,
  ],
})
export class BugsModule { }
