import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { ListNoteComponent } from './components/list-note/list-note.component';
import { PdfDownloadComponent } from './components/pdf-download/pdf-download.component';

const routes: Routes = [
  { path: '', component: ListNoteComponent },
  { path: 'create-note', component: CreateNoteComponent },
  { path: 'edit-note/:id', component: CreateNoteComponent },
  { path: 'pdf-download/:id', component: PdfDownloadComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
