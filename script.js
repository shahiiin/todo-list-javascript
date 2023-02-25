

function addCard() {
    
    const titletext = document.getElementById('titletext');

    const cardbox = document.querySelector('.cardbox');

    const newcard = document.createElement('div');

    newcard.classList.add('card');

    const newcardbody = document.createElement('div');

    newcardbody.classList.add('card-body');

    const newh3 = document.createElement('h3');

    newh3.classList.add('card-title');

    newh3.innerText = titletext.value;

    const newp = document.createElement('p');

    newp.classList.add(['fontbig', 'blue']);

    newp.innerText = titletext.value;

    const newparam1 = document.createElement('p');

    newparam1.classList.add('user-id');

    newparam1.innerText = titletext.value;

    const newparam2 = document.createElement('p');

    newparam2.classList.add('user-room');

    newparam2.innerText = titletext.value;

    const newparam3 = document.createElement('p');

    newparam3.classList.add('user-floor');

    newparam3.innerText = titletext.value;

    newcardbody.appendChild(newh3);
    newcardbody.appendChild(newp);
    newcardbody.appendChild(newparam1);
    newcardbody.appendChild(newparam2);
    newcardbody.appendChild(newparam3);
    newcard.appendChild(newcardbody);
    cardbox.appendChild(newcard);
}


