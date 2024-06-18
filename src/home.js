import homeImage from './dog.jpg'

//container grabbed from div#container on script.js
export default function printHomePage(content) {
    const title = "Welcome to Frank Cafe"
    const text1 = "orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a semper mauris. Etiam auctor fermentum malesuada. Praesent ut porta ipsum. Mauris felis metus, pulvinar non neque in, pellentesque mattis turpis. Sed eu sodales ex, et imperdiet libero. Donec cursus lorem nec urna viverra egestas. Quisque aliquam tristique nisi volutpat volutpat."
    const text2 = "In porta eros metus, eu commodo quam consequat vitae. Morbi bibendum diam in lobortis auctor. Praesent ipsum leo, tempus sed nulla sed, tincidunt vulputate sapien. Cras augue nunc, hendrerit sit amet velit non, varius facilisis neque. Integer eget turpis ultrices, imperdiet ex luctus, accumsan arcu. Nam vehicula sagittis risus eget placerat. Nam ac ligula eleifend, faucibus enim vitae, dignissim neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec placerat vel lorem ac condimentum. Vestibulum vitae leo lectus. Praesent id lorem sed nulla egestas finibus."
    
    const paragraph1 = document.createElement('p'),
        paragraph2 = document.createElement('p'),
        myIcon = new Image(),
        titleEl = document.createElement('h1');


    myIcon.src = homeImage;
    myIcon.className = 'main-image'
    paragraph1.textContent = text1;
    paragraph1.className = 'para';
    paragraph2.textContent = text2;
    paragraph2.className = 'para';
    titleEl.textContent = title;
    titleEl.className = 'title'

    content.appendChild(titleEl);
    content.appendChild(paragraph1);
    content.appendChild(myIcon);
    content.appendChild(paragraph2)
}

