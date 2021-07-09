const fs = require('fs');
const {
    basename
} = require('path');
const path = require('path');

const startPath = './public/patterns/';
const filter = '.rendered.';

const foundFiles = [];

function fromDir(startPath, filter) {

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        } else if (filename.indexOf(filter) >= 0) {
            console.log('-- found: ', filename);

            foundFiles.push({
                "path": filename.replace('public/', ''),
                "filename": basename(filename, '.rendered.html')
            })
        }
    }
}
fromDir(startPath, filter);

console.log(foundFiles);

fs.writeFileSync('./tests/files.json', JSON.stringify(foundFiles));