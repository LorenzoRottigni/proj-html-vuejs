const fs = require("fs");

function logStartCheck(fileName) {
  console.log(`➡ Checking ${fileName} file...`);
}

function logCompletedCheck(fileName) {
  console.log(`  Updating ${fileName} file...`);
}

function warnNoFileFound(fileName) {
  console.warn(`   ![WARN]! ${fileName} not found!`);
}

function updateGitIgnore() {
  const fileName = ".gitignore";

  logStartCheck(fileName);

  if (!fs.existsSync(fileName)) {
    warnNoFileFound(fileName);
    return;
  }

  const gitignoreFile = fs.readFileSync(fileName).toString();
  const distRegex = new RegExp("^[\\\\/]dist$", "m");

  if (gitignoreFile.match(distRegex)) {
    const result = gitignoreFile.replace(distRegex, "");

    logCompletedCheck(fileName);

    fs.writeFileSync(fileName, result);
  }
}

function updateEsLintConfig() {
  const fileName = ".eslintrc.js";

  logStartCheck(fileName);

  if (!fs.existsSync(fileName)) {
    warnNoFileFound(fileName);
    return;
  }

  const esLintFile = require("./" + fileName);

  // Overwrite existing value
  esLintFile["ignorePatterns"] = ["dist/*"];

  logCompletedCheck(fileName);

  fs.writeFileSync(
    fileName,
    `module.exports = ${JSON.stringify(esLintFile, null, "  ")}`
  );
}

function updateVueConfig() {
  const fileName = "vue.config.js";
  let vueConfigFile = {};

  logStartCheck(fileName);

  if (fs.existsSync(fileName)) {
    vueConfigFile = require("./" + fileName);
  }

  // Overwrites current publicPath
  vueConfigFile["publicPath"] = "./";

  logCompletedCheck(fileName);

  fs.writeFileSync(
    fileName,
    `module.exports = ${JSON.stringify(vueConfigFile, null, "  ")}`
  );
}

function updatePackageJson() {
  const fileName = "package.json";

  logStartCheck(fileName);

  if (!fs.existsSync(fileName)) {
    warnNoFileFound(fileName);
    return;
  }

  const packageJsonFile = require("./" + fileName);

  packageJsonFile.scripts["build_push"] =
    "npm run build && git add . && git commit -n -m 'Created/Updated build' && git push";

  logCompletedCheck(fileName);

  fs.writeFileSync(fileName, JSON.stringify(packageJsonFile, null, "  "));
}

updateGitIgnore();
updateEsLintConfig();
updateVueConfig();
updatePackageJson();

console.log(`✓ [OK] Tutte le configurazioni sono state aggiornate.
        Ora puoi eseguire 
        \`npm run build_push\` 
        per eseguire la build e pushare le modifiche.
        Ricordati di farlo molto spesso!!!!`);
