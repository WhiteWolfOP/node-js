/*

Oke kali ini kita akan membahas modules http secara spesific modules ini sangat penting, karena sebagai jalan atau pertara
bagi client dan sistem saling berkomunikasi dan mengirim data melalui hypertexttransfer protocol,
oke tanpa berlama lama lagi mari kita coba langsung

*/

// Module Http bisa membuat sebuah server HTTP yang mengacu kepada port yang telah di set dan memberikan sebuah response kembali terhadap client.

// buat module http yang di assgn pada variable http
const http = require("http");

// buat module url yang di assign pada variable url
const url = require("url");

// The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
// This object has a property called "url" which holds the part of the url that comes after the domain name:

http
  .createServer((req, res) => {
    // res merupakan response yang di berikan oleh server pada saat client mengakses local website dengan port 3000

    // kamu menambahkan writeHead apabila konten yang kamu load merupakan sebuah html/txt
    // res.writeHead(200, {'Content-Type': 'text/html'});

    // res.write adalah response yang diberikan secara visual kepada client / user berupa hello world
    // res.write("Hello world");

    const { nama: param1, umur: param2 } = url.parse(req.url, true).query;
    let txt = `parameter pertama adalah : ${param1}, dan parameter kedua adalah : ${param2}`;

    res.write(txt);

    /* properti url dari object req akan menghasilkan url setelah nama domain */
    // res.write(req.url);

    // res.end() mengakhiri response
    res.end();
  })
  .listen(3000);

//   Note The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 3000.
