import { Categoria } from './../../models/categoria.model';
import { CategoriaService } from './../../service/categoria/categoria.service';

import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: Categoria[] = [
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
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  eletroDomesticos: Categoria = {
      name: 'novo',
      description: 'Todos os trinta'
  };

  categorias: Categoria[] = [];


  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.get();

  }

  post() {
    this.categoriaService.create(this.eletroDomesticos).subscribe(() => {
      this.categoriaService.showMessage('Sucesso');
    });
  }

  get() {
    this.categoriaService.read().subscribe( categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
      this.categoriaService.showMessage('READ');
    });
  }



}
