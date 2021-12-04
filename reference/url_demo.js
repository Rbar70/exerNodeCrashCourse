const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// host root domail
console.log(myUrl.host);

// host name
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//params 
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop
myUrl.searchParams.forEach((value, name) => console.log(`${name}; ${value}`));

