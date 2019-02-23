(function testSingleNoteViewInstantiation() {
  let methodName = "SingleNoteView";
  let singleNoteView = new SingleNoteView();
  assert.isEqual(singleNoteView.__proto__.constructor.name === methodName);
})();
