import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductoI } from '../interfaces/productos.interface';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/products`


  //Intentos sin backend
  /* getAll(): Promise<ProductoI[]> {
    const url = 'https://api.totalum.app/api/v1/crud/producto';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': environment.apiKey
    });

    const body = {
      filter: {},
      pagination: {
        page: 0,
        limit: 50
      },
      sort: {
        createdAt: -1
      }
    };

    return lastValueFrom(this.httpClient.get<any>(url, { headers }))
      .then(res => res.items as ProductoI[]);
  } */

  /* getAll(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer sk-eyJrZXkiOiIxMDFkY2I3ZjkwNTdiMWVhYzE5YTZkNTgiLCJuYW1lIjoiRGVmYXVsdCBBUEkgS2V5IGF1dG9nZW5lcmF0ZWQgMDNwYiIsIm9yZ2FuaXphdGlvbklkIjoiaWFnby1wcnVlYmEtdGVjbmljYSJ9'
    });

    return this.httpClient.get<any[]>(this.baseUrl, { headers });
  } */


  //Petición a mi propio backend
  getAll(): Promise<ProductoI[]> {
    return lastValueFrom(
      this.httpClient.get<ProductoI[]>
      (this.baseUrl)
    )
  }

}
