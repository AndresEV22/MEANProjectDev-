import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteServiceService } from 'src/app/services/note-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  //declaration of variables
  noteForm: FormGroup;
  title = 'Agregar Nota';
  id: string | null;


  constructor(private fb: FormBuilder, private _noteService: NoteServiceService, private router: Router, private aRoute: ActivatedRoute) {

    this.noteForm = this.fb.group({
      nameP: ['', Validators.required],
      numNote:['', Validators.required],
      note:['', Validators.required]
    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isUpdate();
  }

  
  //process to create notes or edit notes on base to the ID
  addNote(){
    console.log(this.noteForm);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-success mx-2',
        denyButton: 'btn btn-outline-danger'
      },
      buttonsStyling: false
    });

    const NOTE : Note = {
      name: this.noteForm.get('nameP')?.value,
      notes:{
        idNote: this.noteForm.get('numNote')?.value,
        note: this.noteForm.get('note')?.value
      }
    }

    if(this.id != null)
    {
      const id = this.id;
      //edit notes

      swalWithBootstrapButtons.fire({
        icon: 'warning',
        title: '¿Quieres guardar los cambios?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          this._noteService.updateNote(id, NOTE).subscribe(data =>{
            this.router.navigate(['/']);
          }, error =>{
            console.log('No actualizado: '+ error),
            this.noteForm.reset();
          });
          swalWithBootstrapButtons.fire('Guardado!', '', 'success')
        } else if (result.isDenied) {
          swalWithBootstrapButtons.fire('Cambios cancelados', '', 'info')
        }
      })
    }else{
      //create notes
      swalWithBootstrapButtons.fire({
        icon: 'warning',
        title: '¿Agregar resultados?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Si, agregar',
        denyButtonText: `No, Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          this._noteService.saveNote(NOTE).subscribe(data =>{
            this.router.navigate(['/']);
          }, error =>{
            this.noteForm.reset();
          });
          swalWithBootstrapButtons.fire('Guardado!', '', 'success')
        } else if (result.isDenied) {
          swalWithBootstrapButtons.fire('Cambios cancelados', '', 'info')
        }
      })     
    }

  }

  //if the id is distint of null, the system call this function for asign the values to the form
  isUpdate(){
    if(this.id != null)
    {
      this.title = 'Editar Resultados';
      this._noteService.getNote(this.id).subscribe(data=>{
        this.noteForm.setValue({
          nameP: data.name,
          numNote: data.notes.idNote,
          note: data.notes.note
        })
      })
    }
  }
}
