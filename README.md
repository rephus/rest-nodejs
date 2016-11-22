## Description

Simple REST NodeJS with Express

Log.js contains a function for easy logs, producing messages like:

```
19:58:43 [INFO] rest: Rest API started on port 8988
20:10:21 [INFO] rest: Received POST body {"foo":"bar"}
```

## Run

```
npm install
node app.js
```

`curl http://localhost:8988?foo=bar` to test a GET message

Run `post.sh`  to test a POST message
