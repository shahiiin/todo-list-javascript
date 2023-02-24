

function addCard() {
    
    const titletext = document.getElementById('titletext');

    const cardbox = document.querySelector('.cardbox');

    const newcard = document.createElement('DIV');

    newcard.className = 'card';

    const newcardbody = document.createElement('DIV');

    newcardbody.className = 'card-body';

    const newh3 = document.createElement('H3');

    newh3.className = 'card-title';

    newh3.innerText = titletext.value;

    const newp = document.createElement('P');

    newp.classList = 'fontbig blue';

    newp.innerText = titletext.value;

    cardbox.appendChild(newcard);

    newcard.appendChild(newcardbody);

    newcardbody.appendChild(newh3);

    newcardbody.appendChild(newp);
  
}
