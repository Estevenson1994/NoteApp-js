(function testSingleNoteViewInstantiation() {
  let methodName = "SingleNoteView";
  let singleNoteView = new SingleNoteView();
  assert.isEqual(singleNoteView.__proto__.constructor.name === methodName);
})();

(function testSingleNoteViewTest() {
  function NoteDouble(text) {
    this.text = text;
  }

  NoteDouble.prototype = {
    returnNoteText: function() {
      return this.text;
    }
  };

  let noteDouble = new NoteDouble("testing");
  let singleNoteView = new SingleNoteView(noteDouble);

  assert.isEqual(singleNoteView.getHtml() === "<div>testing</div>");
})();
