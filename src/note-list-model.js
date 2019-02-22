(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.returnNoteList = function() {
    return this._notes;
  };

  NoteList.prototype.createNote = function(note) {
    this._notes.push(note);
  };

  NoteList.prototype.returnNoteText = function(index) {
    return this._notes[index].returnNoteText();
  };

  exports.NoteList = NoteList;
})(this);
