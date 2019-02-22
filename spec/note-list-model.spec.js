(function testNoteInstatiation() {
  let methodName = "NoteList";
  let noteList = new NoteList();
  assert.isEqual(noteList.__proto__.constructor.name === methodName);
})();
