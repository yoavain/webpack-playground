import icon0 from '~resources/icon0.png';
import icon1 from '~resources/icon1.png';
import icon2 from '~resources/icon2.png';
import icon3 from '~resources/icon3.png';
import icon4 from '~resources/icon4.png';
import icon5 from '~resources/icon5.png';
import icon6 from '~resources/icon6.png';
import icon7 from '~resources/icon7.png';
import icon8 from '~resources/icon8.png';
import icon9 from '~resources/icon9.png';

const icons = [icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];

import { join } from "lodash/array";

const component = () => {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = icons[Math.floor(Math.random() * icons.length)];

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());