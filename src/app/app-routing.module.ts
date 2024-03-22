import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NotesComponent } from './components/notes/notes/notes.component';
// import { AuthGuard } from './authgaurd/authgaurd.guard';

const routes: Routes = [
  // {path:'',redirectTo:"/login",pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'reset/:token',component:ResetComponent},
  {path: 'forgotpassword',component:ForgotPasswordComponent},
  {path: 'sidenav', component:SidenavComponent
  // [ canActivate:[AuthGuard],
  // children:[
  //   {path:'regDemo',component:RegisterComponent},]
},
  {path: 'createnote', component:CreateNoteComponent},
  {path: 'note', component:NotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
