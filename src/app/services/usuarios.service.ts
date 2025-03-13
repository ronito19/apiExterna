import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom } from 'rxjs';
import { IUsuario } from '../interfaces/iusuario.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private httpClient = inject(HttpClient)
  private urlExterna: string = "https://peticiones.online/api/users"

  getAllPromise(url = "https://peticiones.online/api/users?page=1&limit=10"): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(url))
  }


  getById(id: number): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.get<IUsuario>(`${this.urlExterna}/${id}`))
  }



}
