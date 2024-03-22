import { Component, EventEmitter, OnInit } from '@angular/core';
import { response } from 'express';
import { NoteService } from '../../../services/noteservice/note.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit{
  notesArray:any;
  constructor(private notes:NoteService){}

  ngOnInit():void{
    this.onSubmit();
    console.log(this.notesArray);
  }

  onSubmit():void{
    this.notes.getNotes().subscribe((response:any)=>{
      this.notesArray = response.data;
      console.log(this.notesArray);
      this.notesArray = this.notesArray.filter((object:any)=>{
        return object.isTrash == false;
      })
      this.notesArray = this.notesArray.filter((object:any)=>{
        return object.isArchive == false;
      })
      this.notesArray.reverse();
    })
  }

  recieveRefreshEventFromDisplayGetall($event:any){
    console.log("Display to the updated notes" + $event);
    this.onSubmit()
  }
}
