import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { NoteService } from '../../../services/noteservice/note.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'] // Corrected from 'styleUrl'
})
export class MainComponent implements OnInit {
  createNoteForm!: FormGroup;
  showElseBlock: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private noteService: NoteService,
              private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      Title: [''],
      Description: ['', Validators.required]
    });
  }

  clickandSubmit(){
    this.toggleBlock();
    // this.createFormSubmit()
  }

  toggleBlock() {
    this.showElseBlock = !this.showElseBlock;
  }

  openSnackBar(message: string) {
    this.snackbar.open(message, undefined, { duration: 2000 });
  }

  // createFormSubmit() {
    // if (this.createNoteForm.valid) {
    //   let data = {
    //     noteTitle: this.createNoteForm.value.Title,
    //     noteDescription: this.createNoteForm.value.Description
    //   };

    //   this.noteService.create(data).subscribe({
    //     next: (response: any) => {
    //       console.log(response.message);
    //       if (response.success) {
    //         this.openSnackBar('Note created successfully');
    //       } else {
    //         this.openSnackBar('Note creation failed. Please check your credentials.');
    //       }
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       console.log(error.error.message);
    //       this.openSnackBar(error.error.message || 'An error occurred. Please try again later.');
    //     }
    //   });
    // } else {
    //   console.log('Enter valid inputs');
    // }
  // }
// }
}
