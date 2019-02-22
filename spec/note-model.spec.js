(function testNoteInstantiation() {
  let methodName = "Note";
  let note = new Note();
  assert.isEqual(note.__proto__.constructor.name === methodName);
})();

(function testNoteText() {
  let text = "This is my first note";
  let note = new Note(text);
  assert.isEqual(note.returnNoteText() === text);
})();
