// Set to a verified checkout URL or mailto link when ordering is ready.
const ORDER_URL = null;

// Add the requested card previews to the existing gallery.
const gallery = document.querySelector('.card-grid');
if (gallery) {
  ['1', '3', '4', '5', '7', '8'].forEach(number => {
    const title = `Karta ${number}`;
    const button = document.createElement('button');
    button.className = 'art-card';
    button.type = 'button';
    button.dataset.img = `assets/card-${number}.jpg`;
    button.dataset.title = title;
    button.setAttribute('aria-label', `Zobraziť ${title}`);
    button.innerHTML = `<img src="assets/card-${number}.jpg" loading="lazy" alt="${title}"><div></div><span><b>${title}</b><i aria-hidden="true">↗</i></span>`;
    gallery.appendChild(button);
  });
}

const lightbox = document.querySelector('#lightbox');
const preview = document.querySelector('#lightbox-img');
document.querySelectorAll('[data-img]').forEach(button => button.addEventListener('click', () => {
  preview.src = button.dataset.img;
  preview.alt = button.dataset.title;
  document.querySelector('#lightbox-title').textContent = button.dataset.title;
  lightbox.showModal();
}));

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelectorAll('.close,.close-order').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelector('#order').addEventListener('click', () => {
  if (ORDER_URL) window.location.assign(ORDER_URL);
  else document.querySelector('#order-dialog').showModal();
});

if (ORDER_URL) {
  document.querySelector('#order-note').textContent = 'Poštovné do SR a ČR je zahrnuté v cene.';
  document.querySelector('#faq-order').textContent = 'Klikni na tlačidlo Chcem svoju sadu a dokonči objednávku.';
}
