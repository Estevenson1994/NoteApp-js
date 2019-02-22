(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
    this._noteListView = new NoteListView(this._noteList);
  }
  NoteController.prototype.addNote = function(note) {
    this._noteList.createNote(note);
  };

  NoteController.prototype.createNoteListView = function(view) {
    this._noteListView = new view(this._noteList);
  };

  NoteController.prototype.listNotes = function() {
    document.getElementById("app").innerHTML = this._noteListView.getHtml();
  };

  exports.NoteController = NoteController;
})(this);
