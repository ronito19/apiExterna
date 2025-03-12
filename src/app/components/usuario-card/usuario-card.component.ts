import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';

@Component({
  selector: 'app-usuario-card',
  imports: [],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  @Input() miUsuario!: IUsuario;
}
