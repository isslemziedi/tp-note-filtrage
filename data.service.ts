import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private notes: string[] = [];

  addNote(note: string) {
    this.notes.push(note);
  }

  getNotes(): string[] {
    return this.notes;
  }
  filterNotes(keyword: string): string[] {
    return this.notes.filter(note => note.includes(keyword));
  }

  listNotes(): string[] {
    return this.notes;
  }

}






