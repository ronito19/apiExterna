import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-updateuser',
  imports: [],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {
  @Input() idUsuario: string = ""
  


  ngOnInit() {
    console.log(this.idUsuario)
  }
}
