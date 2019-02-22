(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.returnNoteList = function() {
    return this._notes;
  };
  exports.NoteList = NoteList;
})(this);
