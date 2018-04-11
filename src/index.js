import _ from 'lodash';
import './style.css';
import Picture from './picture.jpg';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  var myPicture = new Image();
  myPicture.src = Picture;

  element.appendChild(myPicture);

  return element;
}

document.body.appendChild(component());