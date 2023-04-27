
const loadingDiv = document.getElementById('loading');

export function showSpinner() {
  loadingDiv.style.visibility = 'visible';
}

export function hideSpinner() {
  loadingDiv.style.visibility = 'hidden';
}
