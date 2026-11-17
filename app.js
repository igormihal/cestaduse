// Set to a verified checkout URL or mailto link when ordering is ready.
const ORDER_URL = null;
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
  dialog.addEventListener('click', event => { if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();} });
});
document.querySelector('#order').addEventListener('click',()=>{
  if(ORDER_URL) window.location.assign(ORDER_URL);
  else document.querySelector('#order-dialog').showModal();
});
if(ORDER_URL){document.querySelector('#order-note').textContent='Poštovné do SR a ČR je zahrnuté v cene.';document.querySelector('#faq-order').textContent='Klikni na tlačidlo Chcem svoju sadu a pokračuj na objednávku.';}
