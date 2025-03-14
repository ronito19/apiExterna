import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { RouterLink } from '@angular/router';
import { NgxSonnerToaster, toast } from 'ngx-sonner';

@Component({
  selector: 'app-vista-user',
  imports: [RouterLink,],
  templateUrl: './vista-user.component.html',
  styleUrl: './vista-user.component.css'
})
export class VistaUserComponent {
  @Input() idUsuario: string = "";
  elUsuario!: IUsuario;
  @Input() miUsuario!: IUsuario;
  usuariosServices = inject(UsuariosService);


  async ngOnInit() {
    let _id = String(this.idUsuario)
    console.log(this.idUsuario)
    try {
      this.elUsuario = await this.usuariosServices.getById(_id);
      console.log(this.elUsuario)
    } catch (error) {
    console.log(error)
    }
  }


  deleteUsuario(_id: string) {
      toast(`Quieres borrar al usuario ${this.miUsuario.first_name} 
        ${this.miUsuario.last_name}?`, {
          action: {
            label: 'Aceptar',
            onClick: () => {
              this.confirmDelete(_id);
            },
          },
        });
    }
  
  
    confirmDelete(_id: string) {
      console.log(`El usuario con ID ${_id}, HA SIDO ELIMINADO`);
    }
}
