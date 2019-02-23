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

(function testNoteId1() {
  let note1 = new Note("note 1");
  assert.isEqual(note1.showId() === 0);
})();

(function testNoteId2() {
  let note1 = new Note("note 1");
  let note2 = new Note("note 2");
  assert.isEqual(note2.showId() === 1);
})();
