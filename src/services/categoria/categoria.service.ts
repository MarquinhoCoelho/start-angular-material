import { Category } from '../../app/models/category.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class categoryService {

  baseUrl: string = 'http://localhost:3001';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string) :void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom"
    })
  }

  create(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/categorys`
    return this.http.post<Category>(url, category);
  }

  read(): Observable<Category[]> {
    const url = `${this.baseUrl}/categorys`
    return this.http.get<Category[]>(url)
  }


}
