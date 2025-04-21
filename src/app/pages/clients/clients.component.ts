import { Component, inject } from '@angular/core';
import { ClienteI } from '../../interfaces/clientes.interface';
import { FormsModule } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  imports: [FormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  arrClients: ClienteI[] = [];

  clientsService = inject(ClientsService);

  filterString: string = '';
  arrFilterClients = [...this.arrClients]

  currentPage = 1;
  elementsPerPage = 5;


  async ngOnInit() {
    try {
      this.arrClients = await this.clientsService.getAll();
      this.arrFilterClients = [...this.arrClients];
      /* console.log(this.arrClients) */
    } catch (error) {
      console.error(error);
    }
  }


  //Funcion para el buscador
  filterClients() {
    const search = this.filterString.trim().toLowerCase();

    this.arrFilterClients = this.arrClients.filter(cliente => cliente.nombre?.toLowerCase().includes(search));
    this.currentPage = 1;
  }


  //Paginación
  get totalPages(): number {
    return Math.ceil(this.arrFilterClients.length / this.elementsPerPage);
  }

  paginatedClients() {
    const start = (this.currentPage - 1) * this.elementsPerPage;
    const end = start + this.elementsPerPage;
    return this.arrFilterClients.slice(start, end);
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
