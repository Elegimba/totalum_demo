import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ClienteI } from '../interfaces/clientes.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/clients`

  getAll(): Promise<ClienteI[]> {
      return lastValueFrom(
        this.httpClient.get<ClienteI[]>
        (this.baseUrl)
      )
    }
}
