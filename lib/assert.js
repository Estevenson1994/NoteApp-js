var assert = {
  isEqual: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Test fail: " + assertionToCheck);
    } else {
      console.log("Test Passed");
    }
  }
};
