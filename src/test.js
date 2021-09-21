import {domain, envDomain} from "./common";

function funTest() {
    console.log(domain);
    console.log(domain.www);
    console.log(envDomain);
    console.log(envDomain.www);
}

function funTest_2() {
    const www = process.env.DOMAIN_WWW;// 让生成的文件中，这2个值变成 env 文件中对应的值
    const api = process.env.DOMAIN_API;// 让生成的文件中，这2个值变成 env 文件中对应的值
    console.log(www);
    console.log(api);
}
