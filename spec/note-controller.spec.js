(function testNoteListControllerCanBeInstantiated() {
  var methodName = "NoteController";
  var listDouble = "list double";
  var controller = new NoteController(listDouble);

  assert.isEqual(controller.__proto__.constructor.name == methodName);
})();
