import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-usuario-card',
  imports: [RouterLink],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  @Input() miUsuario!: IUsuario;


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
