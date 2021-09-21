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
            let html = file.contents.toString();
            html = html.replace(/process.env.DOMAIN_WWW/, `'${domain.www}'`);
            html = html.replace(/process.env.DOMAIN_API/, `'${domain.api}'`);
            file.contents = Buffer.from(html);
            done(null, file);
        }))
        .pipe(dest('./dist/'));
    done()
}

module.exports = {test};
