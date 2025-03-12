import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private httpClient = inject(HttpClient)
  private urlExterna: string = "https://peticiones.online/api/users"

  getAllPromise(url= "https://peticiones.online/api/users?limit=5"): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(url))
  }




}
