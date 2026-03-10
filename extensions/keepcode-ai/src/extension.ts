import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('KeepCode AI is active!');
    
    let disposable = vscode.commands.registerCommand('keepcode.chat', () => {
        vscode.window.showInformationMessage('DeepSeek Chat yakÄ±nda burada olacak!');
    });

    context.subscriptions.push(disposable);
}