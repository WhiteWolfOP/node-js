/*

Oke kali ini kita akan belajar mengenai modules pada node js
module merupakan sebuah library dari javascript oke mari kita lihat contohnya

*/

/* Kita dapat memanggil modules dengan cara di bawah ini */

// ini tandanya kita memanggil modules http dan di assign pada variable http
const http = require("http");

// memanggil modul custom
// Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.
const summodul = require("./summodul");

// oke pada step ini kamu harus membuat sebuah object untuk menjalankan server, seperti contoh di bawah ini
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Hasil penjumlahan adalah : ${summodul.sums(1, 2, 3, 4, 5)}`);
    res.end();
  })
  .listen(3000);

/* oke mari kita bedah createServer merupakan sebuah method yang dimiliki oleh object http,
dan pada function tersebut diperlukan 1 argument berupa callback function yang dimana callback function akan di return,
pada saati createServer selesai dijalankan dan menangkap 2 parameter yaitu req dan res, kali ini kita bahas res terlebih dahulu
res merupakan sebuah object yang berfungsi untuk melakukan render content  pada contoh di atas kita set dulu headernya dan juga end
untuk mengakhiri content setelah itu kita melakukan method chaining dengan memanggil method listen yang berfungsi untuk
menandai bahwa project ini di jalankan dengan port 3000 (port bebas asalkan tidak sama dengan yang lain)*/
