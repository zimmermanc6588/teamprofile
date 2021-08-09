
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);

                return;
            }

            resolve({
                ok: true,
                message:'You did it, file created!'
            })
        })
    })
}

module.exports = writeFile