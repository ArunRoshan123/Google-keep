import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService) {this.token = localStorage.getItem('token')}

  addNotes(reqData:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44362/api/Note/add',reqData,true,header);
  }

  getNotes()
  {
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44362/api/Note/display',true,header);
  }

  updatenote(reqData:any,notesId:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44362/api/Note/edit'+notesId,reqData,true,header);
  }
}
