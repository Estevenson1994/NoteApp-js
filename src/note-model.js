(function(exports) {
  let idCounter = 0;
  function Note(text) {
    this._text = text;
    this._id = idCounter;
    idCounter++;
  }

  Note.prototype.returnNoteText = function() {
    return this._text;
  };

  Note.prototype.showId = function() {
    return this._id;
  };

  exports.Note = Note;
})(this);
