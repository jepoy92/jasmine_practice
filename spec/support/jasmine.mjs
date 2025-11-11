export default {
  spec_dir: "spec",
  spec_files: [
    "calculator.spec.js",
    "input.spec.js",
    "gui.spec.js"
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
