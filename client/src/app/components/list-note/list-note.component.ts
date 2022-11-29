import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteServiceService } from 'src/app/services/note-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent implements OnInit {

  //declaration and inicialization of variables
  listNotes: Note[] = [];
  text = '';
  json = ''
  id: string | null;
  note = '';

  constructor(private _noteServices: NoteServiceService, private aRoute: ActivatedRoute, private route:Router) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getNotes();
  }

  //the system call this function to fill the array listNotes for after show the all data in the user view
  getNotes(){
    this._noteServices.getNotes().subscribe(data =>{
      console.log(data);
      this.listNotes = data;
    }, error =>{
      console.log(error);
    });
  }

  
  //the system call this function to delete one row in the DB
  deleteNote(id: any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-success',
        cancelButton: 'btn btn-outline-danger mx-5'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿¡Estas seguro de eliminar esto!?',
      text: "No podras recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, estoy seguro!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._noteServices.deleteNote(id).subscribe(data =>{
          console.log('delete');
          this.getNotes();
        }, error =>{
          console.log(error);
        });
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'Archivo eliminado con exito',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'De acuerdo',
          'Archivo no eliminado',
          'error'
        )
      }
    })
  }


  //generate JSON to download
  generateArchive = (name: string) =>{
    const downd = this.listNotes
    let index = 0
    this.text = '';

    for (index = 0; index < downd.length; index++) {
      this.text +='\t{\n'+
                  '\t\t"name":"'+downd[index].name+'",\n'+
                  '\t\t"Notes":{\n'+
                  '\t\t\t\t"idNota":"'+downd[index].notes.idNote+'",\n'+
                  '\t\t\t\t"notes":"'+downd[index].notes.note+'"\n'+
                  '\t\t\t}\n'+
                  '\t},\n'
      
    }

    this.text = this.text.slice(0,-2);
    this.text = '[\n'+this.text+'\n]';
    const content = this.text;
    const a = document.createElement("a");
    const archive = new Blob([content], {type: 'application/json'});
    const url = URL.createObjectURL(archive);
    a.href = url;
    a.download = new Date().toISOString()+'_'+name;
    a.click();
    URL.revokeObjectURL(url);
  }

  description(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-success mx-2'
      },
      buttonsStyling: false
    });
    if(id != null)
    {
      this._noteServices.getNote(id).subscribe(data=>{
        swalWithBootstrapButtons.fire(data.notes.note);
      });
    }
  }
}
