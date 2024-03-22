import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from '../../../services/noteservice/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  constructor(private note:NoteService,private snackbar: MatSnackBar,public dialog:MatDialog){}

  @Input() NoteId: number = 0;
  @Input() NoteTitle: string = '';
  @Input() NoteDescription: string = '';
  @Input() colour:string = '';
  @Input() noteData: any;

  showTools: boolean = false;

  handleHover() {
    this.showTools = !this.showTools;
  }

  handleReminderClick() {
    console.log('reminder clicked',this.NoteId);
  }

  handleCollaboratorClick() {

  }

  handleColorClick() {

    // let data = {
    //   'colour' : "#FFFF00"
    // }
    // this.note.updateColor(this.NoteId,data).subscribe({
    //   next: (response: any) => {
    //     console.log(response.message);
    //     if (response.success) {
    //       this.openSnackBar('Note color updated successfully');
    //       console.log(this.colour);
    //     } else {
    //       this.openSnackBar('Note color upadation failed. Please check your credentials.');
    //     }
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     console.log(error.error.message);
    //     this.openSnackBar(error.error.message || 'An error occurred. Please try again later.');
    //   }
    // });
  }

  handleImageClick() {

  }

  handleArchiveClick() {
    // console.log("hello World");
    // this.note.updateArchive(this.NoteId,null).subscribe({
    //   next: (response: any) => {
    //     console.log(response.message);
    //     if (response.success) {
    //       this.openSnackBar('Note Archive updated successfully');
    //     } else {
    //       this.openSnackBar('Note Archive upadation failed. Please check your credentials.');
    //     }
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     console.log(error.error.message);
    //     this.openSnackBar(error.error.message || 'An error occurred. Please try again later.');
    //   }
    // })
  }

  handleMoreClick() {

  }
  openSnackBar(message: string) {
    this.snackbar.open(message, undefined, { duration: 2000 });
  }

  handlePinClick(){
    // console.log("hello World");
    // this.note.updatePin(this.NoteId,null).subscribe({
    //   next: (response: any) => {
    //     console.log(response.message);
    //     if (response.success) {
    //       this.openSnackBar('Note pin updated successfully');
    //     } else {
    //       this.openSnackBar('Note pin upadation failed. Please check your credentials.');
    //     }
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     console.log(error.error.message);
    //     this.openSnackBar(error.error.message || 'An error occurred. Please try again later.');
    //   }
    // })
  }

  editdialogbox() {
  //   const noteData = {
  //     NoteId: this.NoteId,
  //     NoteTitle: this.NoteTitle,
  //     NoteDescription: this.NoteDescription
  //   };

  //   const dialogbox = this.dialog.open(UpdateNotesComponent, {
  //     width: '40%',
  //     height: 'auto',
  //     data: noteData
  //   });

  //   console.log(noteData);
  // }
}
}
