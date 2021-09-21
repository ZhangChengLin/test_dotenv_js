const {src, dest, parallel, series, task} = require("gulp");

require('dotenv').config({
    path: './env/.env'
})

const json = {
    host: process.env.DB_HOST,
    databaseName: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.port
}

const test = (done) => {// OK
    console.log(json)
    done()
}

const outfile_test = (done) => {// 让生成到 dist 目录下的 test.js 文件，可以直接在浏览器客户端使用
    src('./src/test.js')
        .pipe(dest('./dist/'))
    done()
}

exports.test = test
exports.outfile_test = outfile_test
