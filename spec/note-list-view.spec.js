(function testInstantiation() {
  let methodName = "NoteListView";
  let noteListView = new NoteListView();
  assert.isEqual(noteListView.__proto__.constructor.name === methodName);
})();
