import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
