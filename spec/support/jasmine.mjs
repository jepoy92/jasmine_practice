export default {
  spec_dir: "spec",
  spec_files: [
    "calculator.mjs",
    "input.mjs",
    // "gui.mjs"
  ],
  helpers: [
    "calculatorHelper.js",
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
