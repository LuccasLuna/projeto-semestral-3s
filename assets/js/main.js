let icon = document.querySelector('#icon');
let listaIcon = document.querySelector('.lista-icon');
const userIcon = document.querySelector('#user-icon');

listaIcon.addEventListener("mouseover", () => icon.src = `https://img.icons8.com/pastel-glyph/50/ffffff/vampire.png`);
listaIcon.addEventListener("mouseout", () => icon.src = `https://img.icons8.com/pastel-glyph/50/FF0046/vampire.png`);
