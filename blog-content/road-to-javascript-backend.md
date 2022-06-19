---
title: Road to Javascript Backend
date: "2022-07-09"
image: node.png
text: Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine outside a web browser.
isFeatured: false
id: 3
---

Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

## A Simple Static File Server

One of the simplest beginner backend projects you can create is a static file server. In its simplest form, a static file server will listen for requests and try to match the requested URL to a file on the local filesystem. Here's a minimal example of that in action:

```js
const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    fs.readFile(__dirname + req.url, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  })
  .listen(8000);
```

For more NodeJS snippets peek [here](https://www.30secondsofcode.org/).
