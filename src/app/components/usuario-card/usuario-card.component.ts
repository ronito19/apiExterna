import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-card',
  imports: [RouterLink],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  @Input() miUsuario!: IUsuario;
  usuariosServices = inject(UsuariosService);


  deleteUsuario(_id: string) {
    if (!this.miUsuario) {
      console.log('miUsuario no esta definido');
      return;
    }
      toast(`Deseas borrar al usuario ${this.miUsuario.first_name} 
        ${this.miUsuario.last_name}?`, {
          action: 
          {
            label: 'Aceptar',
            onClick: async () => {
              try {
              let response = await this.usuariosServices.delete(_id);
              console.log('Usuario eliminado:', response);
              //window.location.href = '/home'
              } catch (error) {
                console.log('Error al eliminar el usuario:', error);
              }
            },
          },
      });
  }


  
}
