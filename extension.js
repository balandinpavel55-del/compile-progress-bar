const vscode = require('vscode');


async function activate(context) {
const disposable = vscode.commands.registerCommand(
'compile-progress-bar.startCompile',
async () => {
await vscode.window.withProgress(
{
location: vscode.ProgressLocation.Notification,
title: "Compiling Project...",
cancellable: false,
},
async (progress) => {
const steps = 10;
for (let i = 1; i <= steps; i++) {
progress.report({ increment: 100 / steps, message: `Step ${i} of ${steps}` });
await new Promise((resolve) => setTimeout(resolve, 500));
}
vscode.window.showInformationMessage("Compilation Complete ✔️");
}
);
}
);


context.subscriptions.push(disposable);
}


function deactivate() {}


module.exports = { activate, deactivate };