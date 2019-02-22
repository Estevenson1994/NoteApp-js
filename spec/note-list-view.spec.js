(function testInstantiation() {
  let methodName = "NoteListView";
  let noteListView = new NoteListView();
  assert.isEqual(noteListView.__proto__.constructor.name === methodName);
})();

(function testSingleNoteListView() {
  function NoteListDouble() {
    this.notes = [];
  }

  function NoteDouble(text) {
    this.text = text;
  }

  NoteListDouble.prototype = {
    createNote: function(note) {
      this.notes.push(note);
    }
  };

  NoteDouble.prototype = {
    returnNoteText: function() {
      return this.text;
    }
  };

  let noteDouble = new NoteDouble("first note");
  let noteListDouble = new NoteListDouble();

  let noteListView = new NoteListView(noteListDouble);
  noteListView.addNote(noteDouble);
  assert.isEqual(
    noteListView.getHtml() === "<ul><li><div>first note</div></li></ul>"
  );
})();
