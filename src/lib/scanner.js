import r from 'readdir-plus';
const fs = require('fs');
const path = require('path');

/**
 * Scans a directory tree and returns `stat` information for the entire depth.
 *
 * @param {string} dirOrFile The filesystem "root" to start the scan at.
 *    Can also be a file (the parent dir will be used.)
 * @return {Promise}
 */
export default function scan(dirOrFile) {
    return new Promise((resolve, reject) => {
        const stat = fs.statSync(dirOrFile);
        const pathToScan = (stat.isFile() ? path.dirname(dirOrFile) : dirOrFile);
        r(pathToScan, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}
