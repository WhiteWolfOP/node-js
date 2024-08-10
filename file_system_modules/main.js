/*

Oke kali ini kita akan mebahas modules file_system, oke tanpa beralama-lama lagi mari kita coba sekarang

*/

// panggil modules http
const http = require("http");

// panggil modules file system
const fs = require("fs");

// panggil modules path
const path = require("path");

// const jsPath = path.join(__dirname, "dom.js");
const indexPath = path.join(__dirname, "index.html");
const jsPath = path.join(__dirname, "dom.js");

//custom module
// const dom = require("./dom");

// buat object server untuk menerima request dari client melalui http protocol
http
  .createServer((req, res) => {
    // panggil method readFile dari object fs, dan set parameter pertama dengan nama file, parameter kedua adalah sebuah callback function
    // yang callback function akan menerima 2 buah argument yaitu err dan data, err merupapakan response error dan data merupakan isi dari file
    if (req.url === "/dom.js") {
      fs.readFile(jsPath, "utf8", function (err, jsdata) {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
          return;
        }

        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.write(jsdata);
        res.end();
      });
    } else {
      fs.readFile(indexPath, function (err, data) {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(3000);

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const indexPath = path.join(__dirname, "index.html");

// http
//   .createServer((req, res) => {
//     if (req.url === "/dom.js") {
//       // Mengirim file JS
//       const jsPath = path.join(__dirname, "dom.js");
//       fs.readFile(jsPath, "utf8", (err, jsData) => {
//         if (err) {
//           console.error(err);
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end("Internal Server Error");
//           return;
//         }
//         res.writeHead(200, { "Content-Type": "application/javascript" });
//         res.write(jsData);
//         res.end();
//       });
//     } else {
//       // Mengirim file HTML
//       fs.readFile(indexPath, "utf8", (err, htmlData) => {
//         if (err) {
//           console.error(err);
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end("Internal Server Error");
//           return;
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(htmlData);
//         res.end();
//       });
//     }
//   })
//   .listen(3000, () => {
//     console.log("Server berjalan di http://localhost:3000/");
//   });
