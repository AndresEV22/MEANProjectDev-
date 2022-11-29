import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { ListNoteComponent } from './components/list-note/list-note.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PdfDownloadComponent } from './components/pdf-download/pdf-download.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    ListNoteComponent,
    PdfDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
