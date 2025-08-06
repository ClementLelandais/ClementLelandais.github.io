function toggleProgressBar(progressDiv) {
  const bar = progressDiv.querySelector('.progress-bar');
  const icon = bar.querySelector('.progress-icon');
  const value = bar.querySelector('.progress-value');
  const pourcentage = bar.getAttribute('data-pourcentage');

  const isActive = bar.style.width === pourcentage + '%';

  if (isActive) {
    // Réinitialiser
    bar.style.width = '100%';
    icon.style.opacity = 1;
    value.style.opacity = 0;
  } else {
    // Activer
    bar.style.width = pourcentage + '%';
    icon.style.opacity = 0;
    value.style.opacity = 1;
  }
}
