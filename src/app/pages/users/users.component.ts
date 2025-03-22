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
      let response = await this.usuariosServices.getAllPromise()
      this.arrUsuariosPromises = response.results;
      console.log(this.arrUsuariosPromises);
    } catch (error) {
      console.log(error)
    }
  }


  async goToPage(n: number) {
    try {
      let response = await this.usuariosServices.getAllPromise(n);
      this.arrUsuariosPromises = response.results;
    }catch (error) {

    }
  }


  deleteUsuario(event: Boolean) {}
  

  
}


