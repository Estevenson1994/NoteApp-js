(function(exports) {
  function Note(text) {
    this._text = text;
  }

  Note.prototype.returnNoteText = function() {
    return this._text;
  };

  exports.Note = Note;
})(this);
