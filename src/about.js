//creates about page
export default function printAboutPage(content) {
    const headText = "About Frank";
    const text1 = 'Frank is orange!!!!!!!!';

    const head = document.createElement('h1');
    head.className = 'title'
    head.textContent = headText;
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = text1;

    content.appendChild(head)
    content.appendChild(paragraph1)
}