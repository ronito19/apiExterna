import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { RouterLink } from '@angular/router';
import { NgxSonnerToaster, toast } from 'ngx-sonner';

@Component({
  selector: 'app-vista-user',
  imports: [RouterLink],
  templateUrl: './vista-user.component.html',
  styleUrl: './vista-user.component.css'
})
export class VistaUserComponent {
  @Input() idUsuario: string = "";
  elUsuario: any = {}
  @Input() miUsuario!: IUsuario;
  usuariosServices = inject(UsuariosService);
  


  async ngOnInit() {
    let _id = String(this.idUsuario)
    console.log(this.idUsuario)
    try {
      this.elUsuario = await this.usuariosServices.getById(_id);
      console.log(this.elUsuario)

    } catch (error) {
    console.log('Error al cargar el usuario:', error)
    }
  }


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
