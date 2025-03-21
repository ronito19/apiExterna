import { Component, inject } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { ILink, IMeta, IResponse } from '../../interfaces/iresponse.interface';
import { UsuarioCardComponent } from "../../components/usuario-card/usuario-card.component";

@Component({
  selector: 'app-users',
  imports: [UsuarioCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  arrUsuariosPromises: IUsuario[] = [];
  usuariosServices = inject(UsuariosService);



  async ngOnInit() {
    try {
      let response: IResponse = await this.usuariosServices.getAllPromise()
      console.log(this.arrUsuariosPromises);
      this.arrUsuariosPromises = response.results;
    } catch (error) {
      console.log(error)
    }
  }


  deleteUsuario(event: Boolean) {}
  

  
}


