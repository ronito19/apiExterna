import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  @Input() miUsuario: IUsuario | any;
  usuariosServices = inject(UsuariosService);
  @Output() deleteItemEmit: EventEmitter<Boolean> = new EventEmitter();
  
  


  async ngOnInit() {
    let _id = String(this.idUsuario)
    console.log('ID recibido:', this.idUsuario)
    if (!this.idUsuario) {
      console.log('ID de usuario no proporcionado');
      return;
    }
    try {
      this.elUsuario = await this.usuariosServices.getById(_id);
      console.log('Usuario cargado:', this.elUsuario)
      this.miUsuario = this.elUsuario;
    } catch (error) {
    console.log('Error al cargar el usuario:', error)
    }
  }


  deleteUsuario(_id: string) {
    if (!this.elUsuario || !this.elUsuario._id) {
      console.log('miUsuario no esta definido');
      return;
    }
      toast(`Deseas borrar al usuario ${this.elUsuario.first_name} 
        ${this.elUsuario.last_name}?`, {
          action: 
          {
            label: 'Aceptar',
            onClick: async () => {
              try {
              let response = await this.usuariosServices.delete(this.elUsuario._id);
              console.log('Usuario eliminado:', response);
              //window.location.href = '/home'
              } catch (error) {
                console.log('Error al eliminar el usuario:', error);
              }
              this.deleteItemEmit.emit(true)
            },
          },
      });
  }
  
  
    
}
