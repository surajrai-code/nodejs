// console.log('Hello World');
const http=require('http');
http.createServer((req,resp)=>{
    console.log('start')
    resp.write('suraj')
    resp.end()
}).listen(4000);
