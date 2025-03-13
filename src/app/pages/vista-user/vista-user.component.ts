import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-vista-user',
  imports: [],
  templateUrl: './vista-user.component.html',
  styleUrl: './vista-user.component.css'
})
export class VistaUserComponent {
  @Input() idUsuario: string = "";
  elUsuario!: IUsuario;
  usuariosServices = inject(UsuariosService);


  async ngOnInit() {
    let id = Number(this.idUsuario)
    console.log(this.idUsuario)
    try {
      this.elUsuario = await this.usuariosServices.getById(id);
      console.log(this.elUsuario)
    } catch (error) {
    console.log(error)
    }
  }
}
