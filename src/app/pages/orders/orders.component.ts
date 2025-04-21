import { Component, inject } from '@angular/core';
import { PedidoI } from '../../interfaces/pedidos.interface';
import { OrdersService } from '../../services/orders.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-orders',
  imports: [FormsModule, DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  arrOrders: PedidoI[] = [];

  ordersService = inject(OrdersService);

  filterString: string = '';
  arrFliterOrders = [...this.arrOrders]

  currentPage = 1;
  elementsPerPage = 5;


  async ngOnInit() {
    try {
      this.arrOrders = await this.ordersService.getAll();
      this.arrFliterOrders = [...this.arrOrders];
      console.log(this.arrOrders)
    } catch (error) {
      console.error(error);
    }
  }


  //Funcion para el buscador
  filterOrders() {
    const search = this.filterString.trim().toLowerCase();

    this.arrFliterOrders = this.arrOrders.filter(pedido => pedido.numero_pedido?.toLowerCase().includes(search));
    this.currentPage = 1;
  }


  //Paginación
  get totalPages(): number {
    return Math.ceil(this.arrFliterOrders.length / this.elementsPerPage);
  }

  paginatedOrders() {
    const start = (this.currentPage - 1) * this.elementsPerPage;
    const end = start + this.elementsPerPage;
    return this.arrFliterOrders.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

}
