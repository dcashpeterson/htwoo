const {
    patternPaths
} = require('../public/styleguide/data/patternlab-data.cjs.js');

const groupKeys = Object.keys(patternPaths)

for (let groupKey in groupKeys) {

    console.log("KEY ::: ", groupKeys[groupKey]);

    const itemKeys = Object.keys(patternPaths[groupKeys[groupKey]]);

    for (let itemKey in itemKeys) {

        console.log("Item Key:::", itemKeys[itemKey]);

    }

}