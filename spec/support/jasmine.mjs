export default {
  spec_dir: "spec",
  spec_files: [
    "../spec/calculator.spec.js"
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
