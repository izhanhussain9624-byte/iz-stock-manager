const fs = require('fs');
let text = fs.readFileSync('d:/stock/preview.html', 'utf8');

// Replace common currency formats in the file safely
text = text.replace(/Cost: \$/g, 'Cost: ₹');
text = text.replace(/Sell: \$/g, 'Sell: ₹');
text = text.replace(/>\$/g, '>₹');
text = text.replace(/\(\$/g, '(₹');
text = text.replace(/- \$\$\{/g, '- ₹${');
text = text.replace(/Amount:\* \$\$\{/g, 'Amount:* ₹${');
text = text.replace(/<span>\$/g, '<span>₹');

fs.writeFileSync('d:/stock/preview.html', text);
console.log('Done');
