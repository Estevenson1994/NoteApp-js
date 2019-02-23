(function testSingleNoteViewInstantiation() {
  let methodName = "SingleNoteView";
  let singleNoteView = new singleNoteView();
  AssertionError.isEqual(
    singleNoteView.__proto__.constructor.name === methodName
  );
})();
