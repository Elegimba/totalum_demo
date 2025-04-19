import { Component, inject } from '@angular/core';
import { ProductoI } from '../../interfaces/productos.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  arrProductos: ProductoI[] = [];
  
  productsService = inject(ProductsService);


  /* async ngOnInit() {
    try {
      this.arrProductos = await this.productsService.getAll();
      console.log(this.arrProductos)
    } catch (error) {
      console.error(error);
    }
  } */

  ngOnInit(): void {
    this.productsService.getAll().subscribe({
      next: (data) => this.arrProductos = data,
      error: (err) => console.error(err)
    });
  }

}
