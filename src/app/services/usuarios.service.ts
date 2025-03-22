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

  getAllPromise(page: number = 1): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(`${this.urlExterna}?page=${page}`))
  }


  getById(_id: string) : Promise<IUsuario> {
    return lastValueFrom(this.httpClient.get<IUsuario>(`${this.urlExterna}/${_id}`))
  }


  delete(_id: string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.delete<IUsuario>(`${this.urlExterna}/${_id}`))
  }


  update(usuario: IUsuario): Promise<IUsuario> {
    let { _id, ...usuarioBody } = usuario;
    return lastValueFrom (this.httpClient.put<IUsuario>(`${this.urlExterna}/${_id}`, usuarioBody))
  }


  insert(usuario: IUsuario): Promise<IUsuario> {
    let { _id, ...usuarioBody } = usuario;
    return lastValueFrom (this.httpClient.post<IUsuario>(this.urlExterna, usuarioBody))
  }



}
