import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
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
    toast(`Quieres borrar al usuario ${this.miUsuario.first_name} 
      ${this.miUsuario.last_name}?`, {
        action: {
          label: 'Aceptar',
          onClick: async () => {
            let response = await this.usuariosServices.delete(_id);
            //window.location.href = '/home'
          },
        },
      });
  }


  
}
