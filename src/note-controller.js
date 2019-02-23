(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
    this._noteListView = new NoteListView(this._noteList);
  }
  NoteController.prototype.addNote = function(note) {
    this._noteList.createNote(note);
  };

  NoteController.prototype.listNotes = function() {
    document.getElementById(
      "app"
    ).innerHTML = this._noteListView.getFirstTwentyCharsHTML();
  };

  exports.NoteController = NoteController;
})(this);
