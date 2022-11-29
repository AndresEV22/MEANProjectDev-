//required libraries
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})

export class NoteServiceService {

  url = 'http://localhost:4000/api/notes/';

  constructor( private http:HttpClient ) { }

  //method for obtain all notes
  getNotes():Observable<any>{
    return this.http.get(this.url);
  }

  //method for delete notes by id
  deleteNote(id: string):Observable<any>{
    return this.http.delete(this.url + id);
  }  

  //method for save all notes
  saveNote(note:Note):Observable<any>{
    return this.http.post(this.url, note);
  }

  //method for obtain notes by id
  getNote(id : string):Observable<any>{
    return this.http.get(this.url + id);
  }

  //method for update notes by id
  updateNote(id: string, note: Note):Observable<any>{
    return this.http.put(this.url + id, note);
  }
}
