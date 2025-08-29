// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import jsonToTS from 'json-to-ts';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('jsontots.convert', async () => {
    const jsonInput = await vscode.window.showInputBox({ prompt: '请输入JSON' });
		console.log("jsonInput: ", jsonInput);
    if (!jsonInput) {return;}
    try {
      const jsonObj = JSON.parse(jsonInput);
			console.log("jsonObj: ", jsonObj);
      const tsTypes = jsonToTS(jsonObj).join('\n\n');
			console.log("tsTypes: ", tsTypes);
      
      // 在新的编辑器窗口中显示生成的 TypeScript 类型
      const document = await vscode.workspace.openTextDocument({
        content: tsTypes,
        language: 'typescript'
      });
      vscode.window.showTextDocument(document);
    } catch (e) {
      vscode.window.showErrorMessage('JSON格式错误');
    }
  });
  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}