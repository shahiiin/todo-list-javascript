

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

    const newparam1 = document.createElement('P');

    newparam1.classList = 'user-id';

    newparam1.innerText = titletext.value;

    const newparam2 = document.createElement('P');

    newparam2.classList = 'user-room';

    newparam2.innerText = titletext.value;

    const newparam3 = document.createElement('P');

    newparam3.classList = 'user-floor';

    newparam3.innerText = titletext.value;

    cardbox.appendChild(newcard);

    newcard.appendChild(newcardbody);

    newcardbody.appendChild(newh3);

    newcardbody.appendChild(newp);

    newcardbody.appendChild(newparam1);

    newcardbody.appendChild(newparam2);

    newcardbody.appendChild(newparam3);


}
