# Functions in `extension.js`

## 1. `activate(context)`
**Purpose:**  
Initializes the extension when it is activated in VS Code.

**Details:**  
- Registers the command `compile-progress-bar.startCompile`.  
- Defines the action performed when the command is executed.  
- Pushes the command into `context.subscriptions` for automatic cleanup.

---

## 2. Command Handler (anonymous async function)
**Triggered by:**  
`compile-progress-bar.startCompile`

**Purpose:**  
Executes the main logic of the extension when the user runs the command.

**Details:**  
- Calls `vscode.window.withProgress` to display a progress bar.  
- Simulates compilation using 10 incremental steps.  
- Updates progress using `progress.report()`.  
- Waits 500 ms between steps using a Promise delay.  
- Shows a completion message when done.

---

## 3. `withProgress` Callback  
**Purpose:**  
Handles the progression inside the progress bar UI.

**Details:**  
- Contains the loop from step 1 to 10.  
- Reports progress and updates the message.  
- Uses `setTimeout` wrapped in a Promise to simulate delays.  
- Completes when 100% progress is reached.

---

## 4. `deactivate()`
**Purpose:**  
Runs when the extension is deactivated.

**Details:**  
- Currently empty because the extension does not allocate persistent resources.  
- Can be expanded later if cleanup logic becomes necessary.

