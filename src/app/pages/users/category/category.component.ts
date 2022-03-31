import { categoryService } from '../../../shareds/services/categoria/categoria.service';
import { Category } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';


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
