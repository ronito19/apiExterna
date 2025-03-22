import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-updateuser',
  imports: [ReactiveFormsModule],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {
  @Input() idUsuario: string = ""
  usuarioForm: FormGroup = new FormGroup({}, [])
  usuario!: IUsuario;
  usuariosService = inject(UsuariosService);
  showPassword: boolean = false;
  title: string = "Registrar";


  async ngOnInit() {
    if (this.idUsuario) {
      try {
        this.usuario = await this.usuariosService.getById(this.idUsuario);
        this.title = 'Actualizar'
      } catch(msg: any) {
        toast.error(msg.error.error)
      }
      
      
    }

    this.usuarioForm = new FormGroup ({
        _id: new FormControl(this.idUsuario || null, []),
        id: new FormControl(this.usuario?.id || 0, []),
        first_name: new FormControl(this.usuario?.first_name || "", []),
        last_name: new FormControl(this.usuario?.last_name || "", []),
        username: new FormControl(this.usuario?.username || "", []),
        email: new FormControl(this.usuario?.email || "", []),
        image: new FormControl(this.usuario?.image || "", []),
        password: new FormControl(this.usuario?.password || "", []),
    }, [])
    
    }


    getDataForm() {
      if (this.usuarioForm.value._id) {
        let response = this.usuariosService.update(this.usuarioForm.value);
      } else {

      }
    }


    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }


  

