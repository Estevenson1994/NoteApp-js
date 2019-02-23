(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  }
  exports.NoteListView = NoteListView;

  NoteListView.prototype.addNote = function(note) {
    this._noteList.createNote(note);
  };

  NoteListView.prototype.getNoteList = function() {
    return this._noteList.returnNoteList();
  };

  NoteListView.prototype.getHtml = function() {
    let html = this.getNoteList().map(note => {
      return "<li><div>" + note.returnNoteText() + "</div></li>";
    });
    return "<ul>" + html.join("") + "</ul>";
  };
  NoteListView.prototype.get20Chars = function() {
    let twentyChars = this.getNoteList().map(note => {
      return note.returnNoteText().substring(0, 20);
    });
    return twentyChars;
  };

  NoteListView.prototype.getFirstTwentyCharsHTML = function() {
    let html = this.get20Chars().map(note => {
      return "<li><div>" + note + "</div></li>";
    });
    return "<ul>" + html.join("") + "</ul>";
  };
})(this);
