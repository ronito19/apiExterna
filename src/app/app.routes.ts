import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { VistaUserComponent } from './pages/vista-user/vista-user.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'home'},
    { path: "home", component: UsersComponent},
//  { path: 'users', component: UsersComponent},
    { path: 'user/:idUsuario', component: VistaUserComponent},
    { path: 'newuser', component: UpdateuserComponent},
    { path: 'updateuser/:idUsuario', component: UpdateuserComponent},
    { path: '**', redirectTo: 'home'}
];
