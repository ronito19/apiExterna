import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

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
  router = inject(Router);


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
        id: new FormControl(this.usuario?.id || 0, [Validators.required]),
        first_name: new FormControl(this.usuario?.first_name || "", [Validators.required]),
        last_name: new FormControl(this.usuario?.last_name || "", [Validators.required]),
        username: new FormControl(this.usuario?.username || "", [Validators.required]),
        email: new FormControl(this.usuario?.email || "", [Validators.required, Validators.email]),
        image: new FormControl(this.usuario?.image || "", []),
        password: new FormControl(this.usuario?.password || "", [Validators.required]),
    }, [])
    
    }


    async getDataForm() {
      if (this.usuarioForm.invalid) {
        toast.error('Por favor completa todos los campos correctamente');
        return;
      }
      
      let response: IUsuario | any
      try {
        if (this.usuarioForm.value._id) {
          response = await this.usuariosService.update(this.usuarioForm.value);
          toast.success('Usuario actualizado correctamente');
        } else {
          response = await this.usuariosService.insert(this.usuarioForm.value);
          toast.success('Usuario creado correctamente')
        }
        this.router.navigate(['/home']);

        }catch (msg: any) {
          console.log('Error:', msg)
          if (msg.status === 400) {
            if (msg.error && Array.isArray(msg.error)) {
              msg.error.forEach((oneError: any) => toast.error(oneError.message))
            } else {
              toast.error('Error de validacion: ');
            }
          } else if (msg.status === 500) {
            toast.error('Erros del servidor');
          } else if (msg.status === 404) {
            toast.error('Recurso no encontrado');
          } else {
            toast.error('Error desconocido')
          }
        }
    }


    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }


  

