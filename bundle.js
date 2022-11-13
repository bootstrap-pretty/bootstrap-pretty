const glob = require("glob");
const { rename } = require('fs');
const path = require('path');

// Rename .css to .min.css
glob('./dist/css/**/*.css', (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        const newFile = `${file.substring(0, file.lastIndexOf('.'))}.min.css`;

        rename(file, newFile, err => {
            if (err) throw err;
            console.log(`✅ ${path.basename(file)} to ${path.basename(newFile)}`);
        });
    });
});
