export class Note {

    _id?: number;
    name: string;
    notes:{
        idNote: number;
        note: string;
    }

    constructor(name: string, idNote: number, note: string, notes:any) {
        this.name = name;
        this.notes = notes;
        this.notes.idNote = idNote;
        this.notes.note = note;
    }
}