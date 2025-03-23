import { Component, inject } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
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


  async goToPage(page: number) {
    try {
      let response = await this.usuariosServices.getAllPromise(page);
      this.arrUsuariosPromises = response.results;
    }catch (error) {

    }
  }
  


  
  

  
}


