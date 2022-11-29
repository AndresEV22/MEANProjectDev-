import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteServiceService } from 'src/app/services/note-service.service';
import { jsPDF }  from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pdf-download',
  templateUrl: './pdf-download.component.html',
  styleUrls: ['./pdf-download.component.css']
})
export class PdfDownloadComponent implements OnInit {

  //declaration and inicialization of variables
  id: string | null;
  name = '';
  numNote = '';
  note = '';
  DATA: HTMLElement | any;
  date = new Date();
  year =this.date.getDate() +'/'+ (this.date.getMonth()+1) +'/'+ this.date.getFullYear();
  

  constructor(private _noteService: NoteServiceService, private fb: FormBuilder, private router: Router, private aRoute: ActivatedRoute) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.DATA = '';
  }

  ngOnInit(): void {
    this.isAsign();
  }

  //asign values to diferents text space
  isAsign(){
    
    if(this.id != null)
    {
      this._noteService.getNote(this.id).subscribe(data =>{
        this.name = data.name;
        this.numNote = data.notes.idNote;
        this.note = data.notes.note;
      });
    }
  }

  //generate the PDF and canvas to combine and create the complete file
  dowloadPDF(){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-success mx-2',
        denyButton: 'btn btn-outline-danger'
      },
      buttonsStyling: false
    });

    this.DATA = document.getElementById('results');
    const doc = new jsPDF('portrait', 'pt','a4');
    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(this.DATA, options).then((canvas) =>{

      const img = canvas.toDataURL('image/PNG');

      //add image canvas to PDF
      const bufferX= 15;
      const bufferY= 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc
    }).then((docResult)=>{
      docResult.save(`${new Date().toISOString()}_resultados_${this.name}.pdf`);
    });
    swalWithBootstrapButtons.fire('Excelente!', 'Tus resultados fueron generados y descargados.', 'success')
  }
}
