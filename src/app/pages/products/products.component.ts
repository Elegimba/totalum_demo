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

  arrProducts: ProductoI[] = [];
  
  productsService = inject(ProductsService);

  filterString: string = '';
  arrFilterProducts = [...this.arrProducts]


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
      this.arrProducts = await this.productsService.getAll();
      console.log(this.arrProducts)
    } catch (error) {
      console.error(error);
    }
  } 


  //Funcion para el buscador
  filterProducts() {
    const search = this.filterString.trim().toLowerCase();

    this.arrFilterProducts = this.arrProducts.filter(producto => producto.nombre?.toLowerCase().includes(search));
  }


  

}
