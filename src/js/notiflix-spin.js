import Notiflix from 'notiflix';

export function spin() {
  return Notiflix.Loading.hourglass('', {
    backgroundColor: 'rgba(0,0,0,0.3)',
    svgSize: '120px',
    svgColor: '#FF9200',
    messageColor: '#FF9200',
    messageFontSize: '28px',
    zindex: 99999,
  });
}

export const stopSpin = () => Notiflix.Loading.remove(500);
