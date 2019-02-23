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
    },
    returnNoteList: function() {
      return this.notes;
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

(function testFirstTwentyCharactersView() {
  function NoteListDouble() {
    this.notes = [];
  }

  function NoteDouble(text) {
    this.text = text;
  }

  NoteListDouble.prototype = {
    createNote: function(note) {
      this.notes.push(note);
    },
    returnNoteList: function() {
      return this.notes;
    }
  };

  NoteDouble.prototype = {
    returnNoteText: function() {
      return this.text;
    }
  };

  let noteDouble = new NoteDouble("first note: This is my first note");
  let noteDouble2 = new NoteDouble("second note: This is my second note");
  let noteListDouble = new NoteListDouble();
  let noteListView = new NoteListView(noteListDouble);

  noteListView.addNote(noteDouble);
  noteListView.addNote(noteDouble2);

  assert.isEqual(
    noteListView.getFirstTwentyCharsHTML() ===
      "<ul><li><div>first note: This is </div></li><li><div>second note: This is</div></li></ul>"
  );
})();
