const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/elementsApp/runtime.js',
        './dist/elementsApp/polyfills.js',
        './dist/elementsApp/scripts.js',
        './dist/elementsApp/main.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/custom-element.js')

    await fs.copy('./dist/elementsApp/styles.css', './elements/styles.css', function(err) {
      if(err) {
        return console.log(err);
      }
    });

    console.info('Elements created successfully!')

})()
