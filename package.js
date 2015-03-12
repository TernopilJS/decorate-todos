Package.describe({
  name: "ternopiljs:decorate-todos",
  summary: "Todos example styles.",
  version: "0.0.1",
  git: "https://github.com/TernopilJS/decorate-todos"
});

Package.onUse(function(api) {

  api.addFiles([
    "ternopiljs:decorate_todos/theme.css",
    "ternopiljs:decorate_todos/meteor_bg.png"
  ], ["client"]);
});