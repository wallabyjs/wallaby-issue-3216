module.exports = () => ({
  name: "React",
  autoDetect: true,
  workers: {
    initial: 6,
    regular: 4,
  },
  delays: {
    run: 1500,
  },
  ignoreFileLoadingDependencyTracking: true,
  files: ["src/**/*.js", '!**/*.test.js'],
  tests: ["**/*.test.js", "!node_modules/**/*"],
  runMode: "onsave",
  maxLogEntrySize: 999999,
});
