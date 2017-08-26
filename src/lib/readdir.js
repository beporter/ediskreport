import r from "readdir-plus";

export default function readdir(path) {
    return new Promise((resolve, reject) => {
        r(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}
