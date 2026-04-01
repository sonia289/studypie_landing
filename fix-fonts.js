const fs = require('fs');

// Read the file
const filePath = '/src/imports/Frame2087325452-73-5916.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace all font patterns
content = content.replace(/font-\['Spoqa_Han_Sans_Neo:Regular',sans-serif\]/g, "font-['Spoqa_Han_Sans_Neo']");
content = content.replace(/font-\['Spoqa_Han_Sans_Neo:Medium',sans-serif\]/g, "font-['Spoqa_Han_Sans_Neo'] font-medium");
content = content.replace(/font-\['Spoqa_Han_Sans_Neo:Bold',sans-serif\]/g, "font-['Spoqa_Han_Sans_Neo'] font-bold");

// Write back
fs.writeFileSync(filePath, content, 'utf-8');

console.log("Font classes updated successfully!");
console.log("Total replacements made.");
