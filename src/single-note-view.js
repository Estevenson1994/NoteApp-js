(function(exports) {
  function SingleNoteView(note) {
    this._note = note;
  }

  SingleNoteView.prototype.getHtml = function() {
    return "<div>" + this._note.returnNoteText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
