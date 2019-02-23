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
      "view"
    ).innerHTML = this._noteListView.getFirstTwentyCharsHTML();
  };

  makeUrlChangeShowNoteForCurrentPage();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }
  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  }

  function showNote(noteId) {
    var note = findNote(noteId);
    var view = new SingleNoteView(note);
    document.getElementById("app").innerHTML = view.getHtml();
  }

  function findNote(noteId) {
    controller._noteList.returnNoteList().forEach(function(note) {
      if (note.showId().toString() === noteId) {
        thisNote = note;
      }
    });
    return thisNote;

    function listForSubmit() {
      document
        .getElementById("text")
        .addEventListener("submit", function(event) {
          event.preventDefault();
        });
    }
  }
  exports.NoteController = NoteController;
})(this);
