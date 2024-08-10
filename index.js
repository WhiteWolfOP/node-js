/*
  Buatlah sebuah project node js sederhana yang bisa berpindah pindah halaman dari dashboard, portfolio atau profile
*/

// panggil module http untuk transfer data melalui protocol hypertext
// panggil modulde file system untuk readfile
// panggil module url untuk menangkap response url yang dibuka oleh client

const http = require("http");
const fs = require("fs");
const url = require("url");

// buat sebuah object server
http
  .createServer((req, res) => {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000);
