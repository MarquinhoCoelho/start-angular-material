import { categoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    categoryComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
  ]
})
export class UsersModule { }
