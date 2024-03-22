// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
// import { ResetComponent } from './components/reset/reset.component';
// import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { SidenavComponent } from './components/sidenav/sidenav.component';
// import { NoteiconsComponent } from './components/noteicons/noteicons.component';
import { FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
// import { DisplayNoteComponent } from './components/display-note/display-note.component';
// import { AuthService } from './services/Auth/auth.service';
// import { HttpClientModule } from '@angular/common/http';
// import { GetnoteComponent } from './components/getnote/getnote.component';
// import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
// import {MatMenuModule} from '@angular/material/menu';
// import { CreateNoteComponent } from './components/create-note/create-note.component';

import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CreateNoteComponent } from "./components/create-note/create-note.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ResetComponent } from "./components/reset/reset.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes/notes.component';
import { ToolExecuteComponent } from './components/tool-execute/tool-execute/tool-execute.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes/display-notes.component';
import { MainComponent } from './components/main/main/main.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetComponent,
    SidenavComponent,
    CreateNoteComponent,
    NotesComponent,
    ToolExecuteComponent,
    DisplayNotesComponent,
    MainComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatLabel,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration(),
    HttpClientModule,
    provideAnimationsAsync(),
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
