(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  }
  exports.NoteListView = NoteListView;
})(this);

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
