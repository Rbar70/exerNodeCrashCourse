const http = require('http');

//crt sever object

http
    .createServer((req, res) => {
        res.write('hELLO wORLD');
        res.end();
})
.listen(5000, () => console.log('Sever up and running...'));
