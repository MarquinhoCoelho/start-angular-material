import { categoryService } from '../../../../services/categoria/categoria.service';
import { Category } from './../../../models/category.model';

import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: Category[] = [
  {id: 1, name: 'Hydrogen', description: 'hue'},
  {id: 2, name: 'Helium', description: 'hue'},
  {id: 3, name: 'Lithium', description: 'hue'},
  {id: 4, name: 'Beryllium', description: 'hue'},
  {id: 5, name: 'Boron', description: 'hue'},
  {id: 6, name: 'Carbon', description: 'hue'},
  {id: 7, name: 'Nitrogen', description: 'hue'},
  {id: 8, name: 'Oxygen', description: 'hue'},
  {id: 9, name: 'Fluorine', description: 'hue'},
  {id: 10, name: 'Neon', description: 'hue'},
];


@Component({
  selector: 'app-users',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class categoryComponent implements OnInit {

  item: Category = {
    name: 'novo',
    description: 'novo'
  };

  categorys: Category[] = [];


  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  constructor(
    private categoryService: categoryService
  ) { }

  ngOnInit(): void {
    this.get();

  }

  post() {
    this.categoryService.create(this.item).subscribe(() => {
      this.categoryService.showMessage('Post Realizado');
    });
  }

  get() {
    this.categoryService.read().subscribe( category => {
      this.categorys = category;
      console.log(this.categorys);
      this.categoryService.showMessage('Leitura Realizada');
    });
  }



}
