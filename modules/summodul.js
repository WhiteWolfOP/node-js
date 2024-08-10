// gunakan katakunci exports untuk membuat sebuah properti dan methods tesedia diluar modul file
exports.sums = function (...args) {
  return args.reduce((prev, curr) => {
    return prev + curr;
  });
};
