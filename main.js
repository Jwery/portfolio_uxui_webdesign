const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function download(url) {
  const a = document.createElement('a')
  a.href = url
  a.download = url.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

$('.photoswipe-wrapper').each(function() {
  $(this).find('a').each(function() {
    $(this).attr('data-size', $(this).find('img').get(0).naturalWidth + 'x' + $(this).find('img').get(0).naturalHeight);
  });
});

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('mouseover', e => {
    const caption = document.createElement('div');
    caption.innerHTML = e.target.alt;
    caption.classList.add('caption');
    e.target.parentNode.appendChild(caption);
  });

  item.addEventListener('mouseout', e => {
    const caption = e.target.parentNode.querySelector('.caption');
    e.target.parentNode.removeChild(caption);
  });
});