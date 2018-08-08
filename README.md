# NPM Test

### This is a test to link npm with github

The program accepts a string and removes spaces within

Install

```javascript
$ npm install @duinneacha/npmtest
```

Usage

const ad1 = require("@duinneacha/npmtest");

ad1("This is a test to remove spaces!");
//=> "Thisisatesttoremovespaces!"

ad1(1337);
//=> Uncaught TypeError: This test expects a string!
// at npmtest (<anonymous>:2:41)
// at <anonymous>:1:1
