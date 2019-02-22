(function testNoteInstatiation() {
  let methodName = "NoteList";
  let noteList = new NoteList();
  assert.isEqual(noteList.__proto__.constructor.name === methodName);
})();

(function testReturnEmptyNoteListText() {
  let noteList = new NoteList();
  assert.isEqual(noteList.returnNoteList().length === 0);
})();

(function testStoringNotesText() {
  function NoteDouble(text) {
    this.text = text;
  }

  NoteDouble.prototype = {
    returnNoteText: function() {
      return this.text;
    }
  };

  let noteDouble = new NoteDouble("this is my first note");
  let noteList = new NoteList();

  noteList.createNote(noteDouble);
  assert.isEqual(noteList.returnNoteText(0) === "this is my first note");
})();
