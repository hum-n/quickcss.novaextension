const data = require('data.js');

class CompletionProvider {    
    provideCompletionItems(editor, context) {
        let items = [];
        
        for (const key in data) {
            const val = data[key];
            const item = new CompletionItem(key, CompletionItemKind.Property);
            
            item.documentation = val;
            item.insertText = val;
            item.tokenize = true;            
            items.push(item);
        }
        
        return items;
    }
}

nova.assistants.registerCompletionAssistant(["css", "scss", "sass", "less"], new CompletionProvider());
