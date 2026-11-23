const languagePicker = document.querySelector('.langdd');

if (languagePicker) {
  document.addEventListener('click', (event) => {
    if (!languagePicker.contains(event.target)) languagePicker.open = false;
  });

  languagePicker.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !languagePicker.contains(event.relatedTarget)) {
      languagePicker.open = false;
    }
  });

  languagePicker.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && languagePicker.open) {
      languagePicker.open = false;
      languagePicker.querySelector('summary').focus();
    }
  });
}
