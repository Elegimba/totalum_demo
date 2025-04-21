import { Component, inject } from '@angular/core';
import { ProductoI } from '../../interfaces/productos.interface';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  arrProductos: ProductoI[] = [];
  
  productsService = inject(ProductsService);

  filtroNombre: string = '';


  //Intento sin backend
  /* ngOnInit(): void {
    this.productsService.getAll().subscribe({
      next: (data) => this.arrProductos = data,
      error: (err) => console.error(err)
    });
  } */


  //Con mi backend
  async ngOnInit() {
    try {
      this.arrProductos = await this.productsService.getAll();
      console.log(this.arrProductos)
    } catch (error) {
      console.error(error);
    }
  } 


  productFilter() {
    if (!this.filtroNombre) {
      return this.arrProductos;
    }
    return this.arrProductos.filter(producto => producto.nombre?.toLowerCase().includes(this.filtroNombre.toLowerCase()));
  }

}
