const {src, dest} = require("gulp");
const map = require('map-stream');

require('dotenv').config({
    path: './env/.env'
})

const domain = {
    www: process.env.DOMAIN_WWW,
    api: process.env.DOMAIN_API,
}

const test = (done) => {
    src('./src/test.js')
        .pipe(map(function (file, done) {
            let content = file.contents.toString();
            content = content.replace(/process.env.DOMAIN_WWW/g, `'${domain.www}'`);
            content = content.replace(/process.env.DOMAIN_API/g, `'${domain.api}'`);
            // 如果是 node 10.0 之前的版本，Buffer.from(content) 要改成 new Buffer(content)
            file.contents = Buffer.from(content);
            done(null, file);
        }))
        .pipe(dest('./dist/'));
    done()
}

module.exports = {test};
