const h1 = document.querySelector("h1");
h1.innerHTML = h1.innerHTML.split(" ").reduce((prev, curr, i) => {
  return (prev +=
    i > 0
      ? `<span class="green">${curr}</span>`
      : `<span class="black">${curr}</span> \xa0`);
}, "");
