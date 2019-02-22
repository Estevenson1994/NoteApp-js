(function testNoteInstantiation() {
  let methodName = "Note";
  let note = new Note();
  assert.isEqual(note.__proto__.constructor.name === methodName);
})();
