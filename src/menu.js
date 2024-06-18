const data = [
    {title: 'Menu Item 1', desc: 'This item is so so yummy'},
    {title: 'Menu Item 2', desc: 'This item is also really good'},
    {title: 'Menu Item 3', desc: "Can't get enough of this one!!!"},
    {title: 'Menu Item 4', desc: 'Simply delectable.'}
]

const makeCard = function(title, desc) {
    const card = document.createElement('div');
    card.className = 'card';
    const cardHeader = document.createElement('h3');
    cardHeader.className = 'card-header';
    cardHeader.textContent = title;
    const cardDescription = document.createElement('p');
    cardDescription.className = 'card-description';
    cardDescription.textContent = desc;

    card.appendChild(cardHeader);
    card.appendChild(cardDescription);
    return card;
}

//prints menu page to screen
export default function printMenuPage(content) {
    const titleEl = document.createElement('h1')
    titleEl.className = 'title'
    const title = "What's cooking?"
    titleEl.textContent = title;
    content.appendChild(titleEl)

    let card;
    for (let i = 0; i < data.length; i++) {
        card = makeCard(data[i].title, data[i].desc)
        console.log(card)
        content.appendChild(card)
    }
}