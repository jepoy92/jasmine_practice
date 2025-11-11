export default {
  spec_dir: "spec",
  spec_files: [
    "calculator.spec.js",
    "input.spec.js",
    "gui.spec.js"
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
