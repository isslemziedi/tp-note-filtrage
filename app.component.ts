import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})

 export class AppComponent {
 
    notes: string[] = [];
    newNote: string = '';
    filterKeyword: string = '';
  
    constructor(private dataService: DataService) { }
  
    addNote() {
      if (this.newNote.trim() !== '') {
        this.dataService.addNote(this.newNote);
        this.newNote = '';
      }
    }
  
    listNotes() {
      this.notes = this.dataService.listNotes();
    }
  
    filterNotes() {
      this.notes = this.dataService.filterNotes(this.filterKeyword);
    }
  }
