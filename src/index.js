import RandomField from './app/app';
import './app/index.css';

document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector('.container');
  const picture = document.querySelector('.img');
  document.querySelector('.img').remove();
  picture.classList.remove('hide');
  const random = new RandomField(div, picture);
  setInterval(() => {
    random.deletingImage();
    setTimeout(() => {
      random.addImage();
    }, 500);
  }, 1000);
});
