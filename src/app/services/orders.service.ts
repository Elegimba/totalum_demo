import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PedidoI } from '../interfaces/pedidos.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/orders`

  getAll(): Promise<PedidoI[]> {
    return lastValueFrom(
      this.httpClient.get<PedidoI[]>
        (this.baseUrl)
    )
  }
}
